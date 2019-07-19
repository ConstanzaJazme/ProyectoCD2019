from django.shortcuts import render
from django.http import HttpResponse

from genders.models import Gender, Recording
from genders.serializers import GenderSerializer
from genders.forms import RecordingForm

from python_code.spchtest import recognize_gender, myspf0med, get_age

from rest_framework import generics
# import base64

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']


def GenderURL(request,value):
    return HttpResponse('<h1> This is an example Nombre es '+ value +'</h1>')


class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer

def upload_recording(request):
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

        recording.save()
        name=recording.audio_file.url.split('/')[-1]
        value= recognize_gender(name)
        # p="probando" # Audio File title
        c="API/media/" # Path to the Audio_File directory (Python 3.7)
        hz=myspf0med(name,c)
        result=get_age(hz,value)
        # return render(request, 'music/detail.html', {'album': album})
        return HttpResponse('<h1> GUARDE AUDIO '+ result +'</h1>')
    context = {
        'form': form,
    }
    return render(request, 'genders/upload_audio.html', context)
    # return HttpResponse('<h1> El formulario no es valido</h1>')



# def delete_recording(request, audio_name):
#     recording = Recording.objects.get(pk=song_id)
#     recording.delete()
#     return HttpResponse('<h1> GUARDE AUDIO</h1>')


# def prueba1(request):
#     value= recognize_gender('probando.wav')
#     p="probando" # Audio File title
#     c="API/media/" # Path to the Audio_File directory (Python 3.7)
#     hz=myspf0med(p,c)
#     result=get_age(hz,value)


    return HttpResponse('<h1> El audio recibido es '+ result +'</h1>')
