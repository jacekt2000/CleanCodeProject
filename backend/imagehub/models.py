from django.contrib.postgres.fields import ArrayField
from django.db import models
from users.models import Account


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Tag(models.Model):
    tag = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.tag


class Post(models.Model):
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=45)
    description = models.TextField()
    create_date = models.DateField()
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()

    def __str__(self):
        return self.comment_text


class Subcomment(models.Model):
    parrent_comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment_text = models.TextField()
    create_date = models.DateField()
    
    def __str__(self):
        return self.comment_text


class PostLike(models.Model):
    type = models.BooleanField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.type)


# class CommentLike(models.Model): 
#     like_type = models.BooleanField()
#     user_id = models.ForeignKey(Account, on_delete=models.CASCADE)
#     comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)
    # def __str__(self):
    #     return self.id