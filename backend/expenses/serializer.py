from rest_framework import serializers
from . models import *

class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense
        fields = ['pk', 'title', 'amount', 'date', 'user']
        read_only_fields = ['pk']
    