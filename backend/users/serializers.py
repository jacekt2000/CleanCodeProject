from rest_framework import serializers
from .models import Account
from django.core.exceptions import ValidationError



class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        password = self.validated_data.get("password")
        instance = self.Meta.model(**validated_data)

        instance.is_active = True
        instance.set_password(password)
        instance.save()

        return instance

