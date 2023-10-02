from rest_framework import serializers
from .models import Product, CustomUser, CustomUser_Product, Cart, Cart_Item

class Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class CustomUser_Serializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
        extra_kwargs = {
            'password' : {
                'write_only' : True
            }
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if(password is not None):
            instance.set_password(password)
        instance.save()
        return instance

class CustomUser_Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser_Product
        fields = "__all__"

class Cart_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"

class Cart_Item_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Cart_Item
        fields = "__all__"
