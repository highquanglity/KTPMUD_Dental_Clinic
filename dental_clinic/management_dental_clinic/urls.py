from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('login/', views.loginPage, name='login'),
    path('signup/', views.signupPage, name='signup'),
    path('home/', views.homePage, name='home'),
    path('book/', views.bookPage, name='book'),
    path('logout/', views.logoutPage, name='logout'),
]