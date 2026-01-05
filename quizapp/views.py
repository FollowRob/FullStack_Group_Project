from django.shortcuts import render
# from django.http import HttpResponse


# Create your views here.
def view_question(request):

    # Placeholder until model is completed
    question = {
        "question": "What is the capital of France?",
        "choice1": "Berlin",
        "choice2": "Madrid",
        "choice3": "Paris",
        "choice4": "Rome",
        "answer": "Paris",
    }

    return render(
        request,
        "quizapp/question.html",
        {
            "question": question,
        },
    )
