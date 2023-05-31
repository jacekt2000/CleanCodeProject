from django.urls import path , include
from imagehub import views


urlpatterns = [
    path('tags/', views.tag_list, name='tag-list'),
    path('tags/<int:pk>/', views.tag_detail, name='tag-detail'),
    path('posts/', views.post_list, name='post-list'),
    path('posts/<int:pk>/', views.post_detail, name='post-detail'),
    path('posts/<int:pk>/edit/', views.edit_post, name='edit-post'),
    path('posts/<int:post>/comments/', views.comment_list, name='comment-list'),
    path('posts/<int:post>/comments/new/', views.add_comment, name='comment-new'),
    path('posts/<int:post>/comments/<int:pk>/', views.comment_detail, name='comment-detail'),
    path('posts/<int:post>/likes/', views.add_postlike, name='postlike-list'),
    path('posts/<int:post>/likes/new/', views.add_postlike, name='postlike-new'),
    path('posts/<int:post>/likes/<int:pk>/', views.postlike_detail, name='postlike-detail'),
    path('comment/<int:comment>/subcomments/', views.subcomment_list, name='subcomment-list'),
    path('comment/<int:comment>/subcomments/new/', views.add_subcomment, name='subcomments-new'),
    path('comment/<int:comment>/subcomments/<int:pk>/', views.subcomment_detail, name='subcomments-detail'),
]