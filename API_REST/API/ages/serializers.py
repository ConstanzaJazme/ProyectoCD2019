from rest_framework import serializers
from ages.models import Age

class AgeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Age
        fields = '__all__'
