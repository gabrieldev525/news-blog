# django
from django.views.generic import TemplateView

# third party
from two_factor.views import OTPRequiredMixin
from allauth.account.decorators import verified_email_required

# project
from core.decorators import auth_verified


# class IndexTemplateView(OTPRequiredMixin, TemplateView):
class IndexTemplateView(TemplateView):
    template_name = 'index.html'


index_view = IndexTemplateView.as_view()