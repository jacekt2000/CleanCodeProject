from django.contrib.postgres.fields import ArrayField
from django.db import models
from backend.imagehub.user import Account


class Post(models.Model):
    post_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=45)
    description = models.TextField()
    create_date = models.DateField()
    image = models.CharField(max_length=100)
    tags = ArrayField(models.CharField(max_length=15))


class Comment(models.Model):
    comment_id = models.IntegerField(primary_key=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()
    parrent_comment = models.IntegerField()


class Post_like(models.Model):
    like_id = models.IntegerField(primary_key=True)
    like_type = models.BooleanField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)


class Comment_like(models.Model): # Klasy nazywamy dużymi literami np. CommnetLike
    like_id = models.IntegerField(primary_key=True)
    like_type = models.BooleanField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)