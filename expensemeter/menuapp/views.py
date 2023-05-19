from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
import datetime


class ExpenseView(APIView):
    serializer_class = ExpenseSerializer

    def get(self, request):
        output = [{'pk':output.pk ,"title": output.title,
                   "amount": output.amount, "date": output.date}
                   for output in Expense.objects.all()]
        return Response(output)
    
    def post(self, request):
        amount = int(request.data['amount'])

        date_str = request.data['date']
        clean_date_str = date_str.split('T')[0]
        date = datetime.datetime.strptime(clean_date_str, '%Y-%m-%d').date()

        data = {
            'title': request.data['title'],
            'amount': amount,
            'date': date,
        }
        
        serializer = ExpenseSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

