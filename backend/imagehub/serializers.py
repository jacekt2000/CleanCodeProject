from rest_framework import serializers
from .models import *
from users.models import Account


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class SubcommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcomment
        fields = '__all__'


class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = '__all__'


class PostCommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    class Meta:
        model = Comment
        exclude = ['post']


class PostSerializer(serializers.ModelSerializer):
    tag = serializers.SlugRelatedField(queryset=Tag.objects.all(), slug_field='tag')
    class Meta:
        model = Post
        fields = '__all__'


class FullPostSerializer(serializers.ModelSerializer):
    tag = serializers.SlugRelatedField(queryset=Tag.objects.all(), slug_field='tag')
    comments = PostCommentSerializer(many=True)
    user = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'create_date', 'tag', 'user', 'like_count','dislike_count', 'comments',)