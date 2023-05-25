from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import UserSerializer
from rest_framework import status
from .models import MyUser

class getRoutes(APIView):
    def get(self, request):
        routes = [
            '/api/token',
            '/api/token/refresh',
        ]

        return Response(routes)
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserCreateView(CreateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
