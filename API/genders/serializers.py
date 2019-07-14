from rest_framework import serializers
from genders.models import Gender

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Gender
        fiels= ('gender_name')
