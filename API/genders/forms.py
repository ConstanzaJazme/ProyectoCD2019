from django import forms

from .models import Recording

class RecordingForm(forms.ModelForm):

    class Meta:
        model = Recording
        fields = ['track']
