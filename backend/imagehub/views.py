from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework_simplejwt.authentication import JWTAuthentication 
from rest_framework.parsers import MultiPartParser, FormParser

from .models import *
from .models import Account
from .serializers import *


def get_user(request):
    try:
        token = request.META.get('HTTP_AUTHORIZATION').replace("Bearer ", "")
        access_token = AccessToken(token)
        return access_token['user_id']
    except:
        return None
    



# --- tag ---

@api_view(['GET', 'POST'])
def tag_list(request):
    if request.method == 'GET':
        tag = Tag.objects.all()
        serializer = TagSerializer(tag, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TagSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def tag_detail(request, pk, format=None):

    try:
        tag = Tag.objects.get(pk=pk)
    except Tag.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    if request.method == 'GET':
        serializer = TagSerializer(tag)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TagSerializer(instance=tag, data=request.data)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PATCH':
        serializer = TagSerializer(instance=tag, data=request.data, partial=True)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        tag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# --- post ---

@api_view(['GET', 'POST'])
# @parser_classes([MultiPartParser, FormParser])
def post_list(request):
    try:
        user = get_user(request)
    except:
        user = null

    if request.method == 'GET':
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        request.data._mutable = True
        request.data['user'] = user
        request.data._mutable = False

        serializer = PostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
# @parser_classes([MultiPartParser, FormParser])
def post_detail(request, pk, format=None):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    serializer = PostSerializer(post)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
# @parser_classes([MultiPartParser, FormParser])
def edit_post(request, pk, format=None):

    try:
        user = get_user(request)
    except:
        user = null

    try:
        post = Post.objects.get(pk=pk, user=user)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)
  
    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PATCH':
        serializer = PostSerializer(post, data=request.data, partial=True)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# --- comment ---

@api_view(['GET'])
def comment_list(request, post):
    comment = Comment.objects.filter(post=post)
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data)


@api_view(['POST'])    
@permission_classes([IsAuthenticated])
def add_comment(request, post):
    
    try:
        user = get_user(request)
    except:
        user = null

    request.data._mutable = True
    request.data['user'] = user
    request.data['post'] = int(post)
    request.data._mutable = False

    serializer = CommentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def comment_detail(request, post, pk, format=None):

    try:
        user = get_user(request)
    except:
        user = null

    try:
        comment = Comment.objects.get(pk=pk, post=post, user=user)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
  
    elif request.method == 'PATCH':
        serializer = CommentSerializer(instance=comment, data=request.data, partial=True)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# --- subcomment ---

@api_view(['GET'])
def subcomment_list(request, comment):
    subcomment = Subcomment.objects.filter(parrent_comment=comment)
    serializer = SubcommentSerializer(subcomment, many=True)
    return Response(serializer.data)


@api_view(['POST'])    
@permission_classes([IsAuthenticated])
def add_subcomment(request, comment):
    
    try:
        user = get_user(request)
    except:
        user = null

    request.data._mutable = True
    request.data['user'] = user
    request.data['parrent_comment'] = int(comment)
    request.data._mutable = False

    serializer = SubcommentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def subcomment_detail(request, comment, pk, format=None):

    try:
        user = get_user(request)
    except:
        user = null

    try:
        subcomment = Subcomment.objects.get(pk=pk, parrent_comment=comment, user=user)
    except Subcomment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    if request.method == 'GET':
        serializer = SubcommentSerializer(subcomment)
        return Response(serializer.data)
  
    elif request.method == 'PATCH':
        serializer = SubcommentSerializer(instance=subcomment, data=request.data, partial=True)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        subcomment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# --- post likes

@api_view(['GET'])
def postlike_list(request, post):
    postlike = PostLike.objects.filter(post=post)
    serializer = PostLikeSerializer(postlike, many=True)
    return Response(serializer.data)


@api_view(['POST'])    
@permission_classes([IsAuthenticated])
def add_postlike(request, post):
    
    try:
        user = get_user(request)
    except:
        user = null

    like = PostLike.objects.get(user=user, post=int(post))
    
    if like is not None:
        return Response(status=status.HTTP_208_ALREADY_REPORTED)

    request.data._mutable = True
    request.data['user'] = user
    request.data['post'] = int(post)
    request.data._mutable = False


    serializer = PostLikeSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def postlike_detail(request, post, pk, format=None):

    try:
        user = get_user(request)
    except:
        user = null

    try:
        postlike = PostLike.objects.get(pk=pk, post=post, user=user)
    except PostLike.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    if request.method == 'GET':
        serializer = PostLikeSerializer(postlike)
        return Response(serializer.data)
  
    elif request.method == 'PATCH':
        serializer = PostLikeSerializer(instance=postlike, data=request.data, partial=True)
  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        postlike.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
