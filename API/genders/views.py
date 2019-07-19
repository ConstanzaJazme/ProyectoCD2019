from django.shortcuts import render, get_object_or_404
from django.http import Http404,HttpResponse,HttpResponseRedirect, JsonResponse
# import Requests
from django.core.exceptions import ObjectDoesNotExist,MultipleObjectsReturned
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from genders.models import Gender, Recording
from genders.serializers import GenderSerializer
from genders.forms import RecordingForm
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from python_code.spchtest import recognize_gender, myspf0med, get_age, convert_to_wav, direct_wav

from rest_framework import generics
# import base64

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg','m4a']


def GenderURL(request,value):
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')


class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer

def upload_recording(request):
    response_data= {}
    form = RecordingForm(request.POST or None, request.FILES or None)

    if form.is_valid():
        recording = form.save(commit=False)
        recording.audio_file = request.FILES['audio_file']
        file_type = recording.audio_file.url.split('.')[-1]
        file_type = file_type.lower()
        if file_type not in AUDIO_FILE_TYPES:
            context = {
                'form': form,
                'error_message': 'Audio file must be WAV, MP3, or OGG',
            }
            return HttpResponse('<h1> Audio file must be WAV, MP3, or OGG </h1>')
        name=recording.audio_file.url.split('/')[-1]
        recording.save()


        if file_type!='wav':    #Se procesa
            value,result= convert_to_wav(name)
            # remove_audiofile(filepath)
        else:
            value,result= direct_wav(name)

        recording.delete()  #Se borra

        if value!='0' and result!='0':
            response_data={
                'gender': value,
                'age': result,
                'error': 0,
            }
            return JsonResponse(response_data)

        response_data={
            'gender': value,
            'age': result,
            'error': 1,
        }
        return JsonResponse(response_data)


    context = {
        'form': form,
    }
    return render(request, 'genders/upload_audio.html', context)

#
# def prueba1(request):
#     value= recognize_gender('probando.wav')
#     p="probando" # Audio File title
#     c="API/media/" # Path to the Audio_File directory (Python 3.7)
#     hz=myspf0med(p,c)
#     result=get_age(hz,value)
#     return HttpResponse('<h1> El audio recibido es '+ result +'</h1>')
#
#
# class JSONResponse(HttpResponse):
#     """
#     An HttpResponse that renders its content into JSON.
#     """
#     def __init__(self, data, **kwargs):
#         content = JSONRenderer().render(data)
#         kwargs['content_type'] = 'application/json'
#         super(JSONResponse, self).__init__(content, **kwargs)
