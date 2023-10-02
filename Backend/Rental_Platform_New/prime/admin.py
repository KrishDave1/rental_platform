from django.contrib import admin
from .models import Product, CustomUser, CustomUser_Product, City, City_Product_Relation, Cart, Cart_Item
# Register your models here.
admin.site.register(Product)
admin.site.register(CustomUser)
admin.site.register(CustomUser_Product)
admin.site.register(City)
admin.site.register(City_Product_Relation)
admin.site.register(Cart)
admin.site.register(Cart_Item)

admin.site.site_header = "Rental Administration"
admin.site.site_title = "Rental Corporation"