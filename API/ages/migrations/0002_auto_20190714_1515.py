# Generated by Django 2.2.3 on 2019-07-14 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ages', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='age',
            old_name='range',
            new_name='group_name',
        ),
    ]