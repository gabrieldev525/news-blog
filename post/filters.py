# Third party
import django_filters

# Local
from .models import Post


class PostFilterSet(django_filters.FilterSet):

    class Meta:
        model = Post
        fields = ['category', 'title']
