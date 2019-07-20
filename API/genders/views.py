from django.shortcuts import render, get_object_or_404
from django.http import Http404,HttpResponse,HttpResponseRedirect, JsonResponse
from django.core.exceptions import ObjectDoesNotExist,MultipleObjectsReturned
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from genders.models import Gender, Recording
from genders.serializers import GenderSerializer, RecordingSerializer
from genders.forms import RecordingForm
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from python_code.spchtest import recognize_gender, myspf0med, get_age, convert_to_wav, direct_wav

from rest_framework import generics
# import base64

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg','m4a']      #Tipos de audio aceptados


def GenderURL(request,value):       #Probando paso de parametros por URL
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')


class GendersList(generics.ListCreateAPIView):      #Probando modelos
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer


class upload_audio(APIView):
    def post(self,request,format=None):
        serializer=RecordingSerializer(data=request.data)
        if serializer.is_valid():
            file_type = str(request.data.get('track')).split('.')[-1]
            file_type = file_type.lower()
            name=str(request.data.get('track')).split('/')[-1]    #Se obtiene el nombre de la grabación
            serializer.save()    #Se guarda la grabación
            #Preparando el analisis de la grabación
            if file_type!='wav':    #Si el audio no viene en formato wav
                value,result= convert_to_wav(name)  #Se obtiene genero y edad
            else:   #Si viene en formato wav
                value,result= direct_wav(name)  #Se obtiene genero y edad
            #Fin analisis
            latest_track= list(Recording.objects.all())[-1]
            latest_track.delete()

            #Enviando resultados
            if value!='0' and result!='0':  #El audio fue analizado con éxito
                response_data={
                    'gender': value,
                    'age': result,
                    'error': 0, #Cuando NO hay problemas con el audio
                }
                return Response(response_data, status=status.HTTP_201_CREATED)

            response_data={ #El audio no pudo ser analizado
                'mensaje' : "Su audio no fue procesado.",
                'error': 1, #Cuando hay problemas con el audio
            }
            return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

            #Fin envio
        else:
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#
#
#
# def upload_recording(request):      #Metodo POST, recibe un formulario con la grabación a analizar
#     response_data= {}       #JSON a devolver
#     form = RecordingForm(request.POST or None, request.FILES or None)
#     if form.is_valid():     #Se revisa que el formulario sea valido
#         #Recolectando datos del formulario
#         recording = form.save(commit=False)
#         recording.track = request.FILES['track']
#         file_type = recording.track.url.split('.')[-1]
#         file_type = file_type.lower()
#         #Fin de recolección
#
#         if file_type not in AUDIO_FILE_TYPES:   #Se verifica que el tipo de audio corresponda a los aceptados
#             context = {
#                 'form': form,
#                 'error_message': 'Audio file must be WAV, MP3, or OGG',
#             }
#             return HttpResponse('<h1> Audio file must be WAV, MP3, or OGG </h1>')
#         name=recording.track.url.split('/')[-1]    #Se obtiene el nombre de la grabación
#         recording.save()    #Se guarda la grabación
#
#         #Preparando el analisis de la grabación
#         if file_type!='wav':    #Si el audio no viene en formato wav
#             value,result= convert_to_wav(name)  #Se obtiene genero y edad
#         else:   #Si viene en formato wav
#             value,result= direct_wav(name)  #Se obtiene genero y edad
#         #Fin analisis
#
#         recording.delete()  #Se la grabación de la colección
#
#         #Enviando resultados
#         if value!='0' and result!='0':  #El audio fue analizado con éxito
#             response_data={
#                 'gender': value,
#                 'age': result,
#                 'error': 0, #Cuando NO hay problemas con el audio
#             }
#             return JsonResponse(response_data)
#
#         response_data={ #El audio no pudo ser analizado
#             'gender': value,
#             'age': result,
#             'error': 1, #Cuando hay problemas con el audio
#         }
#         return JsonResponse(response_data)
#         #Fin envio
#
#     #Cuando el formulario esta vacio o no es correcto
#     context = {
#         'form': form,
#     }
#     return render(request, 'genders/upload_audio.html', context)

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
