from django.shortcuts import render
from django.http import HttpResponse

from genders.models import Gender
from genders.serializers import GenderSerializer

from rest_framework import generics
import base64


def GenderURL(request,value):
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')

class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer
