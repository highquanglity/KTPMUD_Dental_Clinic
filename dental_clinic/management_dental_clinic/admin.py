from django.contrib import admin
from .models import Dentist,Register, Patient, Staff, HealthRecord, Service, Report, DentistProcedure, BookingTicket
# Register your models here.
class DentistAdmin(admin.ModelAdmin):
    pass
class RegisterAdmin(admin.ModelAdmin):
    pass
class PatientAdmin(admin.ModelAdmin):
    pass
class StaffAdmin(admin.ModelAdmin):
    pass
class HealthRecordAdmin(admin.ModelAdmin):
    pass
class ServiceAdmin(admin.ModelAdmin):
    pass
class ReportAdmin(admin.ModelAdmin):
    pass
class DentistProcedureAdmin(admin.ModelAdmin):
    pass
class BookingTicketAdmin(admin.ModelAdmin):
    pass

admin.site.register(Dentist, DentistAdmin)
admin.site.register(Register, RegisterAdmin)
admin.site.register(Patient, PatientAdmin)
admin.site.register(Staff, StaffAdmin)
admin.site.register(HealthRecord, HealthRecordAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Report, ReportAdmin)
admin.site.register(DentistProcedure, DentistProcedureAdmin)