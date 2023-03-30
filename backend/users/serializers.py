from rest_framework import serializers
from .models import Account



class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'email', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        instance.is_active = True
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
