from django.shortcuts import get_object_or_404, render
from quizapp.models import Quiz, Question
from django.http import JsonResponse


# Create your views here.
def view_quiz(request):

    questions_list = Question.objects.all()

    return render(
        request,
        "quizapp/quiz.html",
        {
            "questions": questions_list,
        },
    )

def check_answer(request, question_id):
    question = get_object_or_404(Question, pk=question_id)

    question_answer = question.answer

    return JsonResponse(question_answer, safe=False)

