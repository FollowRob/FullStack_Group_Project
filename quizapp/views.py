from django.shortcuts import get_object_or_404, render
from quizapp.models import Quiz, Question
# from django.http import HttpResponse


# Create your views here.
def view_quiz(request):

    questions = Question.objects.all()

    return render(
        request,
        "quizapp/quiz.html",
        {
            "questions": questions,
        },
    )
