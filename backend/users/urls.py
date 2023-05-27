from users import views
from django.urls import path, include


urlpatterns = [
    path('registration/', views.register_user, name='registration'),
    path('account/', views.account_detail, name='account-detail'),
    path('change_password/', views.ChangePasswordView.as_view(), name='change-password'),
]
