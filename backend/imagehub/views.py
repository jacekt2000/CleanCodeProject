from django.shortcuts import render
from .serializers import TagSerializer, PostSerializer
from rest_framework import viewsets
from .models import Tag, Post
from rest_framework.parsers import MultiPartParser, FormParser


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    parser_classes = (MultiPartParser, FormParser)
