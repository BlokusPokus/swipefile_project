from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('handle_file_action/', views.handle_file_action, name='handle_file_action'),
]