# Generated by Django 5.0 on 2024-03-22 12:40

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('advertisement', '0002_initial'),
        ('main_page_domer', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор'),
        ),
        migrations.AddField(
            model_name='complaint',
            name='advertisement',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='advertisement.advertisement', verbose_name='Объявление'),
        ),
        migrations.AddField(
            model_name='photopublication',
            name='publication',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_page_domer.publication', verbose_name='Публикация'),
        ),
        migrations.AddField(
            model_name='complaint',
            name='reason',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_page_domer.reasonofcomplaint', verbose_name='Причина жалобы'),
        ),
    ]