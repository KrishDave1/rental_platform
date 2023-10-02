from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
import uuid
# Create your models here.
class CustomUser(AbstractUser):
    city_To_Rent = models.CharField(max_length=50)
    phone_Number = models.BigIntegerField(unique=True)
    email = models.EmailField()
    # by default parameters = username, password
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['phone_Number']

class Product(models.Model):
    Title = models.CharField(max_length=200)
    Product_Id = models.BigIntegerField() 
    Product_Image = models.URLField()
    Price = models.DecimalField(max_digits=20, decimal_places=10)
    Reviews = models.CharField(max_length=200)
    Rating = models.DecimalField(max_digits=20, decimal_places=10)
    Price_was = models.CharField(max_length=50)
    Percentage_off = models.CharField(max_length=200)
    Type = models.CharField(max_length=50)

    def __str__(self) -> str:
        return (self.Title)

class CustomUser_Product(models.Model):
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.id)

class Cart_Item(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="items")
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cartitems")
    quantity = models.IntegerField(default=0)

    def __str__(self) -> str:
        return (self.product.Title)
    
class City(models.Model):
    city_Name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return (self.city_Name)
    
class City_Product_Relation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return (self.product.Title)
