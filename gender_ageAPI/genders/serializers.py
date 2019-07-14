# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from genders.models import Gender

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Gender
        fields = '__all__'
