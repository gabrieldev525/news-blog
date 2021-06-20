
# Third party
from rest_framework.routers import DefaultRouter

# local
from .views import UserAPIView

routes = DefaultRouter(trailing_slash=False)
routes.register(r'users', UserAPIView, 'users')

urlpatterns = routes.urls
