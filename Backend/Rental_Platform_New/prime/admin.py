from django.contrib import admin
from .models import Product, CustomUser, CustomUser_Product, City, City_Product_Relation
# Register your models here.
admin.site.register(Product)
admin.site.register(CustomUser)
admin.site.register(CustomUser_Product)
admin.site.register(City)
admin.site.register(City_Product_Relation)

admin.site.site_header = "Rental Administration"
admin.site.site_title = "Rental Corporation"