from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
import datetime
from django.shortcuts import get_object_or_404, redirect
from rest_framework import status


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
            instance = serializer.save()
            response_data = serializer.data
            response_data['pk'] = instance.pk  
            return Response(response_data, status=status.HTTP_201_CREATED)

class DeleteExpenseView(APIView):
    def post(self, request):
        expense = get_object_or_404(Expense, pk=request.data['pk'])
        expense.delete()
        return redirect("ExpenseView")