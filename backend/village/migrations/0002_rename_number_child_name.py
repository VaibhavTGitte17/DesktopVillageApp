# Generated by Django 5.0.4 on 2024-05-29 15:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('village', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='child',
            old_name='number',
            new_name='name',
        ),
    ]
