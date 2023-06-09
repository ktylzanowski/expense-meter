# Generated by Django 4.2.1 on 2023-05-27 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='email',
            field=models.EmailField(error_messages={'unique': 'The e-mail address is already taken.'}, max_length=255, unique=True, verbose_name='email address'),
        ),
    ]
