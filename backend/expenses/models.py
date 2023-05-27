from django.db import models
from django.conf import settings

class Expense(models.Model):
    title = models.CharField(max_length=30, null=False)
    amount = models.DecimalField(null=False, max_digits=8, decimal_places=2)
    date = models.DateField(null=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.title)