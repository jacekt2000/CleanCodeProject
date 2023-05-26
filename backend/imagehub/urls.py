from django.urls import path , include
from rest_framework import routers
from imagehub import views


router = routers.DefaultRouter()

router.register("tags", views.TagView, basename="tag")
router.register("posts", views.PostViewSet, basename="post")


urlpatterns = [
    path('', include(router.urls))
]