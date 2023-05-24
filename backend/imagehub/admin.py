from django.contrib import admin
from imagehub.models import Tag, Post 


class TagAdmin(admin.ModelAdmin):
    list = ('tag')


class PostAdmin(admin.ModelAdmin):
    list = ('user_id','title', 'description', 'create_date', 'image', 'tags')


admin.site.register(Tag, PostAdmin)
admin.site.register(Post, PostAdmin)
