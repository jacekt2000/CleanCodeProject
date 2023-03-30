from typing import Any
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import viewsets, status
from .serializers import AccountSerializer#, CustomTokenObtainPairSerializer
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response


class UserRegistrationViewSet(viewsets.GenericViewSet):
    serializer_class = AccountSerializer

    @action(methods=['POST'], detail=False)
    def user(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)

