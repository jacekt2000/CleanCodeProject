from rest_framework.routers import DefaultRouter
from imagehub import views


router = DefaultRouter()

router.register("posts", views.PostView, basename="post")

imagehub_urls =  router.urls