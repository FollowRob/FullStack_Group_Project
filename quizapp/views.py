from django.shortcuts import get_object_or_404, render
from quizapp.models import Quiz, Question
from django.http import JsonResponse
from quizapp.serializers import QuestionAnswerSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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

@api_view(['GET'])
def check_answer(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        return Response({'error': 'Question not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = QuestionAnswerSerializer(question)
        return Response(serializer.data)
