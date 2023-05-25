from rest_framework import serializers
from .models import MyUser

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = MyUser
        fields = ['email', 'password', 'password2']
        read_only_fields = ['pk']

    def validate_email(self, value):
        if MyUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Podany adres e-mail jest już zajęty.")
        return value

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Podane hasła nie są identyczne.")
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2')
        user = MyUser(**validated_data)
        user.set_password(password)
        user.save()
        return user
    