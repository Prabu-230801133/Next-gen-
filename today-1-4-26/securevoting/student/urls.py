from django.urls import path
from student import views
# APP urls
urlpatterns = [
    path('', views.display, name='display'),
]