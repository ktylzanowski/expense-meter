from rest_framework import serializers
from .models import MyUser
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    def validate_password(self, value):
        if value != self.initial_data.get('password2'):
            raise serializers.ValidationError("The passwords are not identical.")
        return value

    def create(self, validated_data):
        user = MyUser.objects.create_user(validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = MyUser
        fields = ('pk', 'email', 'password', 'password2')