from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . models import *
from . serializer import *
from rest_framework.response import Response
import datetime
from django.shortcuts import get_object_or_404
from rest_framework import status



class ExpenseView(APIView):
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        output = [{'pk':output.pk ,"title": output.title,
                   "amount": output.amount, "date": output.date}
                   for output in user.expense_set.all()]
        return Response(output)
    
    def post(self, request):
        try:
            amount = int(request.data['amount'])
            date_str = request.data['date']
            clean_date_str = date_str.split('T')[0]
            date = datetime.datetime.strptime(clean_date_str, '%Y-%m-%d').date()
            user = request.user
            data = {
                'title': request.data['title'],
                'amount': amount,
                'date': date,
                'user': user.pk,
            }

        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ExpenseSerializer(data=data)

        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            response_data = serializer.data
            response_data['pk'] = instance.pk  
            return Response(response_data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class DeleteExpenseView(APIView):
    def post(self, request):
        expense = get_object_or_404(Expense, pk=request.data['pk'])
        expense.delete()
        return Response(status=status.HTTP_201_CREATED)