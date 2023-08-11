from django.contrib import admin
from .models import Dentist, Patient, Staff, HealthRecord, Service, Report, DentistProcedure
# Register your models here.
admin.site.register(Dentist)
admin.site.register(Patient)
admin.site.register(Staff)
admin.site.register(HealthRecord)
admin.site.register(Service)
admin.site.register(Report)
admin.site.register(DentistProcedure)