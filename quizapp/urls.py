from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_quiz, name='view_quiz'),
]