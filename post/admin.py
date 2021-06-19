# Django
from django.contrib import admin


# Local
from .models import Post
from .models import Category


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
