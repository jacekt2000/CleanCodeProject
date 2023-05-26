from rest_framework import serializers
from .models import Tag, Post
from users.models import Account


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'tag')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','user', 'title', 'description', 'create_date', 'image', 'tags')
        