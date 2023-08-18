from django import forms
from django.core.exceptions import ValidationError
from .models import Patient

class PatientForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password2 = forms.CharField(widget=forms.PasswordInput, label='Confirm password')

    def clean_user_name(self):
        user_name = self.cleaned_data.get('user_name')

        if Patient.objects.filter(user_name=user_name).exists():
            raise ValidationError('Tên đăng nhập đã được sử dụng')

        return user_name

    def clean_password2(self):
        password = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get('password2')

        if password and password2 and password != password2:
            raise forms.ValidationError('Mật khẩu chưa khớp')

    class Meta:
        model = Patient
        fields = ['firstname', 'lastname', 'gender', 'dob', 'contactAddress', 'contactNumber', 'healthInsuranceNumber']

