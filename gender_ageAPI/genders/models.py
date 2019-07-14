# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Gender(models.Model):     #femenino o masculino
    gender_name=models.CharField(max_length=20, blank=True, default='')

class Meta:
    ordering=('gender_name',)
