# Generated by Django 2.2 on 2019-07-20 01:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('genders', '0003_recording'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recording',
            old_name='audio_file',
            new_name='track',
        ),
    ]
