from django.shortcuts import render
from .serializers import TagSerializer, PostSerializer
from rest_framework import viewsets
from .models import Tag, Post


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
