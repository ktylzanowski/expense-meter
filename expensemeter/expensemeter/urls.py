from django.contrib import admin
from django.urls import path, include
from menuapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ExpenseView.as_view(), name="ExpenseView"),
    path('delete', DeleteExpenseView.as_view(), name="DeleteExpenseView"),
]
