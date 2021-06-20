# django
from django.contrib.auth.models import User

# third party
from rest_framework import serializers

# local


class UserSerializer(serializers.ModelSerializer):

    cellphone = serializers.CharField(source='profile.phone', read_only=True)

    class Meta:
        model = User
        exclude = [
            'date_joined',
            'groups',
            'password',
            'user_permissions',
            'last_login'
            ]
