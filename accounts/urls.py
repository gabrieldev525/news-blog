# django
from django.urls import path

# local
from .views import UserAPIView
from .views import UserCreateAPIView


urlpatterns = [
    path('users/current', UserAPIView.as_view(), name='current_user'),
    path('users/create', UserCreateAPIView.as_view(), name='user-create')
]
