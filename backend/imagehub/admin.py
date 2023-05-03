from django.contrib import admin
from imagehub.models import Post


class PostAdmin(admin.ModelAdmin):
    list = ('user_id','title', 'description', 'create_date', 'image', 'tags')


admin.site.register(Post, PostAdmin)