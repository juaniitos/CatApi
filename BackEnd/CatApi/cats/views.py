from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from .serializer import CatsSerializer
from .models import Cats
# from .services import get_images

# Create your views here.
class CatsView(viewsets.ModelViewSet):
    serializer_class = CatsSerializer
    queryset = Cats.objects.all()

# class GetImages(TemplateView):
#    template_name = 'get_images.html'
#    template_name = 'get_images.html'
#    def get_context_data(self, *args, **kwargs):
#       context = {
#            'images' : get_images(),
#        }
#        return context