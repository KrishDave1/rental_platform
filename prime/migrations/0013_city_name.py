# Generated by Django 4.2.5 on 2023-10-02 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prime', '0012_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='name',
            field=models.CharField(default=None, max_length=30),
            preserve_default=False,
        ),
    ]
