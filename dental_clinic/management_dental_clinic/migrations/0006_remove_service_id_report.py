# Generated by Django 4.2.1 on 2023-08-17 20:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('management_dental_clinic', '0005_remove_patient_id_dentist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='ID_Report',
        ),
    ]
