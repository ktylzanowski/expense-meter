from django.urls import path
from . import views

urlpatterns = [
    path('', views.ExpenseView.as_view(), name="ExpenseView"),
    path('delete', views.DeleteExpenseView.as_view(), name="DeleteExpenseView"),
]