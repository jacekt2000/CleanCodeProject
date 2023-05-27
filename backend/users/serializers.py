from rest_framework import serializers
from .models import Account
from django.core.exceptions import ValidationError


class AccountCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'username', 'email', 'password']

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


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'born_date')

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.born_date = validated_data.get('born_date', instance.born_date)

        instance.save()

        return instance


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
