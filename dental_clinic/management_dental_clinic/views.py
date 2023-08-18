from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import *
from django.contrib.sessions.backends.db import SessionStore

# Create your views here.
def loginPage(request):
    # Get the role from the POST request.
    role = request.POST.get('role')
    username = request.POST.get('username')
    password = request.POST.get('password')
    if request.method =="POST":
        if role == 'dentist':
            try:
                dentist = Dentist.objects.get(user_name=username)
                if dentist.check_password(password):
                    # request.session['dentist_id'] = dentist.userID
                    
                    return redirect('landing')  
                else:
                    error_message = 'Kiểm tra lại tên đăng nhập hoặc mật khẩu.'
            except Dentist.DoesNotExist:
                error_message = 'Kiểm tra lại tên đăng nhập hoặc mật khẩu.'
            return render(request, 'management_dental_clinic/LoginPage.html', {'error_message': error_message})
        elif role == 'patient':
            try:
                patient = Patient.objects.get(user_name=username)
                if patient.check_password(password):
                    request.session['patient_id'] = patient.ID_Patient
                    
                    return redirect('home')  
                else:
                    error_message = 'Kiểm tra lại tên đăng nhập hoặc mật khẩu.'
            except Patient.DoesNotExist:
                error_message = 'Kiểm tra lại tên đăng nhập hoặc mật khẩu.'
            return render(request, 'management_dental_clinic/LoginPage.html', {'error_message': error_message})
        else:
            error_message = 'Bạn là bệnh nhân hay bác sĩ? Nhập lựa chọn ở trên.'
            return render(request, 'management_dental_clinic/LoginPage.html', {'error_message': error_message})       
    else:
        return render(request, 'management_dental_clinic/LoginPage.html')

def signupPage(request):
    firstname = request.POST.get('firstname')
    lastname = request.POST.get('lastname')
    phoneNumber = request.POST.get('phoneNumber')
    email = request.POST.get('email')
    gender = request.POST.get('gender')
    insurance = request.POST.get('insurance')
    dob = request.POST.get('dob')
    username = request.POST.get('username')
    password = request.POST.get('password')
    password2 = request.POST.get('password2')

    username_exists = Patient.objects.filter(user_name=username).exists()

    if not all([firstname, lastname, phoneNumber, insurance, dob, username, password, password2,gender,email]):
        error_message = "Vui lòng điền đầy đủ thông tin."
        return render(request, 'management_dental_clinic/SignupPage.html', {'error_message': error_message})

    if (username_exists):
        error_message = 'Tên đăng nhập đã được sử dụng'
        return render(request, 'management_dental_clinic/SignupPage.html',{'error_message': error_message})

    if (password!=password2):
        error_message = 'Mật khẩu không trùng khớp'
        return render(request, 'management_dental_clinic/SignupPage.html',{'error_message': error_message})

    if all([firstname, lastname, phoneNumber, insurance, dob, username, password, password2,gender,email]):
        patient = Patient(
            user_name=username,
            password=password,
            firstname=firstname,
            lastname=lastname,
            gender=gender,
            dob=dob,
            contactAddress=email,
            contactNumber=phoneNumber,
            healthInsuranceNumber=insurance,
        )
        patient.save()
        return redirect('login') 

    return render(request, 'management_dental_clinic/SignupPage.html')

def bookPage(request):
    services = Service.objects.all()
    
    patient_ids = Patient.objects.values_list('ID_Patient', flat=True)
    session_values = request.session.values()
    user_not_login = "hidden"
    user_login = "hidden" 
    
    for value in session_values:
        if value in patient_ids:
            patient = Patient.objects.get(ID_Patient=value)
            user_not_login = "hidden"
            user_login = "show"

    if request.method =="POST":
        id_Service = request.POST.get('ID_Service')
        print('???????',id_Service) 
        register = Register(
            ID_Patient=patient,
            ID_Service=Service.objects.get(ID_Service=id_Service)
        )
        register.save()
        success_message = 'Bạn đã đăng kí thành công. Lịch khám sẽ được gửi qua email trong thời gian sớm nhất.'
        context = { 'services': services,'success_message':success_message,'user_login':user_login,'user_not_login':user_not_login}
        return render(request, 'management_dental_clinic/book.html',context)

    if (user_login == "show"):
        return render(request, 'management_dental_clinic/book.html',{'services': services,'user_login':user_login,'user_not_login':user_not_login})
        
    user_not_login = "show"
    user_login = "hidden"

    context = { 'services': services, 'user_not_login':user_not_login,'user_login':user_login}
    return redirect('login')

def homePage(request):
    patient_ids = Patient.objects.values_list('ID_Patient', flat=True)
    session_values = request.session.values()
    for value in session_values:
        if value in patient_ids:
            patient = Patient.objects.get(ID_Patient=value)
            user_not_login = "hidden"
            user_login = "show"
            services = Service.objects.all()
            context = { 'services': services, 'user_not_login':user_not_login,'user_login':user_login}
            return render(request, 'management_dental_clinic/home.html',context)

    user_not_login = "show"
    user_login = "hidden"

    services = Service.objects.all()
    context = { 'services': services, 'user_not_login':user_not_login,'user_login':user_login}
    return render(request, 'management_dental_clinic/home.html',context)

def logoutPage(request):
    if 'patient_id' in request.session:
        del request.session['patient_id']
    return redirect('login')

# def register(request):
#     user_not_login = "hidden"
#     user_login = "hidden"
    
#     if request.method == 'POST':
#         form = CustomerForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('login')
#     else:
#         form = CustomerForm()
#     return render(request, 'app/register.html', {'form': form, 'user_not_login':user_not_login, 'user_login':user_login})