from django.shortcuts import render
from django.http import HttpResponse

from genders.models import Gender
from genders.serializers import GenderSerializer
from python_code.spchtest import recognize_gender, myspf0med, get_age

from rest_framework import generics
import base64


def GenderURL(request,value):
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')


class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer

def prueba1(request):
    value= recognize_gender('probando.wav')
    p="probando" # Audio File title
    c="API/python_code/testing_file" # Path to the Audio_File directory (Python 3.7)
    hz=myspf0med(p,c)
    result=get_age(hz,value)


    return HttpResponse('<h1> El audio recibido es '+ result +'</h1>')
