from rest_framework import serializers
from genders.models import Ages

class AgeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Age
        fiels= ('group_name')
