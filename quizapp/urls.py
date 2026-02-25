from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_quiz, name='view_quiz'),
    path('api/check-answer/<int:question_id>', views.check_answer, name='check_answer'),
]