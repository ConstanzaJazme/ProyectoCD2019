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
