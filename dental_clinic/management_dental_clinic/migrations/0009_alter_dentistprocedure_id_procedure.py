# Generated by Django 4.2.1 on 2023-08-18 00:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management_dental_clinic', '0008_alter_register_registertime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dentistprocedure',
            name='ID_Procedure',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]