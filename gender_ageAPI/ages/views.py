# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


from ages.models import Age
from ages.serializers import AgeSerializer

from rest_framework import generics

class AgesList(generics.ListCreateAPIView):
    queryset=Age.objects.all()
    serializer_class= AgeSerializer
