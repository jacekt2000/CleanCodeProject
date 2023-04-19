from rest_framework import serializers
from .models import Account
from django.core.exceptions import ValidationError



class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id','username', 'email', 'password']

    def create(self, validated_data):
        password = self.validated_data.get("password")
        instance = self.Meta.model(**validated_data)

        instance.is_active = True
        if len(password) < 8:
            raise ValidationError("Password must have at least 8 characters")
        else:
            instance.set_password(password)
        instance.save()
        return instance

