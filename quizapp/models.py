from django.db import models

# Create your models here.

class Quiz(models.Model):

    name = models.TextField(max_length=60)
    def __str__(self):
        return f"{self.name}"


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.SET_NULL, related_name="questions", null=True, blank=True)
    question_text = models.CharField(max_length=60)
    choices = models.JSONField()
    answer = models.CharField(max_length=60)

    def __str__(self):
        return f"{self.question_text}"