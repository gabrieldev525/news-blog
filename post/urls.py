# Third party
from rest_framework.routers import DefaultRouter

# Local
from .views import PostAPIView
from .views import CategoryAPIView

routes = DefaultRouter(trailing_slash=False)
routes.register(r'post', PostAPIView, 'post')
routes.register(r'category', CategoryAPIView, 'category')

urlpatterns = routes.urls
