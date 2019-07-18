from django.shortcuts import render
from django.http import HttpResponse

from genders.models import Gender
from genders.serializers import GenderSerializer
from python_code.spchtest import recognize_gender

from rest_framework import generics
import base64


def GenderURL(request,value):
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')


class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer

def prueba1(request):
    value= recognize_gender()
    return HttpResponse('<h1> El audio recibido es '+ value +'</h1>')
