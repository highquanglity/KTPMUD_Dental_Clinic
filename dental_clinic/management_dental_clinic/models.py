from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
class Dentist(models.Model):
    ID_Dentist = models.AutoField(primary_key=True, editable=False)
    user_name = models.CharField(max_length=50,default='')
    password = models.CharField(max_length=50,default='')
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    contactAddress = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=20)
    expertise = models.CharField(max_length=255)

    def check_password(self, password):
        if (self.password==password):
            return True
        else:
            return False

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    def get_absolute_url(self):
        return reverse('dentist-detail',args=[str(self.ID_Dentist)])

class Patient(models.Model):
    ID_Patient = models.AutoField(primary_key=True, editable=False)
    user_name = models.CharField(max_length=50,default='')
    password = models.CharField(max_length=50,default='')
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    dob = models.DateField()
    contactAddress = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=20)
    healthInsuranceNumber = models.CharField(max_length=50)
    # history = models.CharField(max_length=255, default='')
    # ID_Dentist = models.ForeignKey(Dentist, on_delete=models.CASCADE)

    def check_password(self, password):
        if (self.password==password):
            return True
        else:
            return False

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    def get_absolute_url(self):
        return reverse('patient-detail',args=[str(self.ID_Patient)])

class Staff(models.Model):
    ID_Staff = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    contactAddress = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=20)
    position = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    def get_absolute_url(self):
        return reverse('staff-detail',args=[str(self.ID_Staff)])

class HealthRecord(models.Model):
    ID_Record = models.IntegerField(primary_key=True)
    examinationDate = models.DateField()
    examinationTime = models.IntegerField()
    examinationRoom = models.CharField(max_length=255)
    note = models.CharField(max_length=255)
    ID_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    ID_Dentist = models.ForeignKey(Dentist, on_delete=models.CASCADE)

    def __str__(self):
        return f"Record ID: {self.ID_Record}"
    class Meta:
        ordering = ['examinationDate']

class DentistProcedure(models.Model):
    ID_Procedure = models.AutoField(primary_key=True, editable=False)
    examinationDate = models.DateField()
    examinationTime = models.IntegerField()
    examinationRoom = models.CharField(max_length=255)
    note = models.CharField(max_length=255)
    ID_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    # ID_Dentist = models.ForeignKey(Dentist, on_delete=models.CASCADE)

    def __str__(self):
        return f"Procedure ID: {self.ID_Procedure}"

class Service(models.Model):
    ID_Service = models.AutoField(primary_key=True, editable=False)
    serviceName = models.CharField(max_length=255)
    serviceDescription = models.CharField(max_length=255)
    cost = models.FloatField()

    def __str__(self):
        return self.serviceName

class Report(models.Model):
    ID_Report = models.IntegerField(primary_key=True)
    reportStyle = models.CharField(max_length=255)
    reportDate = models.DateField()
    totalAmount = models.FloatField()
    note = models.CharField(max_length=255)
    ID_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    ID_Staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    ID_Record = models.ForeignKey(HealthRecord, on_delete=models.CASCADE)

    def __str__(self):
        return f"Report ID: {self.ID_Report}"
    class Meta:
        ordering = ['reportDate']

class BookingTicket(models.Model):
    ID_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    ID_Procedure = models.ForeignKey(DentistProcedure, on_delete=models.CASCADE)
    bookingStatus = models.IntegerField()
    bookingDate = models.DateField()
    bookingStyle = models.CharField(max_length=10)
    note = models.CharField(max_length=255)
    examinationTime = models.CharField(max_length=255)

class Register(models.Model):
    ID_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    ID_Service = models.ForeignKey(Service, on_delete=models.CASCADE)
    registerTime = models.DateTimeField(auto_now_add=True)

class Trong(models.Model):
    ID_Record = models.ForeignKey(HealthRecord, on_delete=models.CASCADE)
    ID_Service = models.ForeignKey(Service, on_delete=models.CASCADE)

class Expertise(models.Model):
    ID_Dentist = models.ForeignKey(Dentist, on_delete=models.CASCADE, related_name='expertises')
    ID_Service = models.ForeignKey(Service, on_delete=models.CASCADE)

    def __str__(self):
        return f"Expertise ID: {self.pk}"
