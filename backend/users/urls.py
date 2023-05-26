from .views import register_user
from django.urls import path, include


urlpatterns = [
    path('registration/', register_user, name='registration'),
]
