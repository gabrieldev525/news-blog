# Third party
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.views import Response

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

    @action(detail=False, methods=['get'])
    def get_menu(self, request):
        queryset = self.filter_queryset(self.get_queryset())

        result = {}
        for post in queryset.iterator():
            year = post.created.year
            month = post.created.month

            result.setdefault(year, {})
            result[year].setdefault(month, [])

            result[year][month].append(self.get_serializer(post).data)

        return Response(result)


class CategoryAPIView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'
