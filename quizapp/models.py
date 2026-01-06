from django.db import models

# Create your models here.

class Quiz(models.Model):

    name = models.TextField(max_length=60)
    def __str__(self):
        return f"Quiz app"


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.SET_NULL, related_name="questions", null=True, blank=True)
    question_text = models.TextField(max_length=60)
    choice_1 = models.TextField(max_length=60)
    choice_2 = models.TextField(max_length=60)
    choice_3 = models.TextField(max_length=60)
    choice_4 = models.TextField(max_length=60)
    answer = models.TextField(max_length=60)
    