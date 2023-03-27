from django.contrib.postgres.fields import ArrayField
from django.db import models

class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    login = models.CharField(max_length=25)
    email = models.CharField(max_length=25)
    password = models.CharField(max_length=25)
    born_date = models.DateField()
    firstname = models.CharField(max_length=45, blank=True)
    lastname = models.CharField(max_length=45, blank=True)


class Post(models.Model):
    post_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=45)
    description = models.TextField()
    create_date = models.DateField()
    image = models.CharField(max_length=100)
    tags = ArrayField(models.CharField(max_length=15)) 


class Comment(models.Model):
    comment_id = models.IntegerField(primary_key=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()
    parrent_comment = models.IntegerField()


class Post_like(models.Model):
    like_id = models.IntegerField(primary_key=True)
    like_type = models.BooleanField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)


class Comment_like(models.Model):
    like_id = models.IntegerField(primary_key=True)
    like_type = models.BooleanField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)