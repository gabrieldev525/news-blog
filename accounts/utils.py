# python
import hashlib

# django
from django.contrib.auth.models import User


def make_username(email):
    name = email.split('@')[0]
    size = len(name)

    username = name[:150]
    count = 1
    while User.objects.filter(username=username).exists():
        h = hashlib.sha3_512(f'{name}-{count}'.encode('utf-8'))
        username = f'{name}{h.hexdigest()}'[:size + 6]
        count += 1
    return username[:150]


def make_user_attr(user, password, cellphone):
    # make username
    if not user.username:
        user.username = make_username(user.email)

    # make password
    if password:
        user.set_password(password)

    user.save()

    if cellphone:
        user.profile.phone = cellphone
        user.profile.save(update_fields=['phone'])
