# Generated by Django 4.2.5 on 2023-10-01 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prime', '0006_alter_product_price_was'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='Title',
            field=models.CharField(max_length=200),
        ),
    ]
