# Third party
from rest_framework.viewsets import ModelViewSet

# Local
from .models import Post
from .models import Category
from .serializers import PostSerializer
from .serializers import CategorySerializer
from .filters import PostFilterSet


class PostAPIView(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
    filter_class = PostFilterSet


class CategoryAPIView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'
