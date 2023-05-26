from typing import Any
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import viewsets, status
from .serializers import AccountSerializer
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response


@api_view(["POST"])
def register_user(request):
    serializer = AccountSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save() 
        return Response({"message": "OK"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

