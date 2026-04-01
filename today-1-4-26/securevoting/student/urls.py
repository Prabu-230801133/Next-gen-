from django.urls import path
from . import views

app_name = 'student'

urlpatterns = [
    path("", views.display, name="home"),
    path("display/", views.display, name="display"),
]