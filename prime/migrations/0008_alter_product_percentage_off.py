# Generated by Django 4.2.5 on 2023-10-01 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prime', '0007_alter_product_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='Percentage_off',
            field=models.CharField(max_length=200),
        ),
    ]