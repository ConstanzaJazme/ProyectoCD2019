# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Age(models.Model):     #niño, joven, adulto, adulto mayor
    group_name=models.CharField(max_length=20, blank=True, default='')

class Meta:
    ordering=('group_name',)
