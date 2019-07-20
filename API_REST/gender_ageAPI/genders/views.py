# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from genders.models import Gender
from genders.serializers import GenderSerializer

from rest_framework import generics

class GendersList(generics.ListCreateAPIView):
    queryset=Gender.objects.all()
    serializer_class= GenderSerializer
