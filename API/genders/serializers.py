from rest_framework import serializers
from genders.models import Gender, Recording

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Gender
        fields = '__all__'

class RecordingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Recording
        fields = '__all__'

    def validate(self, data):
        """
        Valida que el audio este en el formato correcto
        """

        AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg','m4a']      #Tipos de audio aceptados

        file_type = str(data.get('track')).split('.')[-1]
        file_type = file_type.lower()
        if file_type not in AUDIO_FILE_TYPES:
            raise serializers.ValidationError("Tipo de audio no soportado.")
        return data
