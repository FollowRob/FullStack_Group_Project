from django.shortcuts import get_object_or_404, render
from quizapp.models import Quiz, Question
# from django.http import HttpResponse


# Create your views here.
def view_question(request):

    queryset = Question.objects.filter(pk=1)
    question = get_object_or_404(queryset)

    question_text = question.question_text
    choices = question.choices
    answer = question.answer

    return render(
        request,
        "quizapp/question.html",
        {
            "question_text": question_text,
            "choices": choices,
            "answer": answer,
        },
    )
