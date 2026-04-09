from rest_framework import routers, serializers, viewsets
from quizapp.models import Question

class QuestionAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ["answer"]