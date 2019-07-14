# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ages.models import Age

class AgeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Age
        fields = '__all__'
