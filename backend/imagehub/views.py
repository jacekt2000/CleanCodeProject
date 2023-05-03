from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()