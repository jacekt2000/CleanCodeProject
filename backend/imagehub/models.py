from django.contrib.postgres.fields import ArrayField
from django.db import models
from users.models import Account


class Post(models.Model):
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=45)
    description = models.TextField()
    create_date = models.DateField()
    image = models.CharField(max_length=100)
    tags = ArrayField(models.CharField(max_length=15))


class Comment(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()


class Subcomment(models.Model):
    parrent_comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()
    

class PostLike(models.Model):
    like_type = models.BooleanField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)


# class CommentLike(models.Model): 
#     like_type = models.BooleanField()
#     user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
#     comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)