from rest_framework.routers import DefaultRouter
from .views import UserRegistrationViewSet
from django.contrib import admin
from django.urls import path , include

router = DefaultRouter()

router.register("registration", UserRegistrationViewSet, basename="registration")

users_urls =  router.urls