from django.contrib import admin
from imagehub.models import *


class TagAdmin(admin.ModelAdmin):
    list = ('tag')


class PostAdmin(admin.ModelAdmin):
    list = ('user_id','title', 'description', 'create_date', 'image', 'tags')


admin.site.register(Tag, PostAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment)
admin.site.register(Subcomment)
admin.site.register(PostLike)
