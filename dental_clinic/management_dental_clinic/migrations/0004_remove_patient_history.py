# Generated by Django 4.2.1 on 2023-08-17 18:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('management_dental_clinic', '0003_alter_patient_history'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patient',
            name='history',
        ),
    ]
