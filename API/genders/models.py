from django.db import models

class Gender(models.Model):     #femenino o masculino
    name=models.CharField(max_length=20, blank=True, default='')

class Meta:
    ordering=('name',)
