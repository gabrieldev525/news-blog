# Django
from django.db import models

# Third party
from django_extensions.db.models import TimeStampedModel
from django_extensions.db.models import TitleSlugDescriptionModel


class Category(TitleSlugDescriptionModel, TimeStampedModel):

    class Meta:
        ordering = ['-created', '-modified']


class Post(TitleSlugDescriptionModel, TimeStampedModel):

    image = models.ImageField(
        upload_to='post')

    category = models.ForeignKey(
        Category, related_name='posts', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created', '-modified']
