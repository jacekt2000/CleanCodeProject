from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication 
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Tag, Post
from .models import Account
from .serializers import TagSerializer, PostSerializer


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class PostViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [JWTAuthentication]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    parser_classes = (MultiPartParser, FormParser)
