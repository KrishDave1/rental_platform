from django.shortcuts import render, redirect
from .models import Product, CustomUser, Cart, Cart_Item, CustomUser_Product
from .serializer import Product_Serializer, CustomUser_Serializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
import json
from django.http import JsonResponse

User = get_user_model()

# Create your views here.

# def login_User(request):
#     if(request.user.is_authenticated):
#         return redirect('home')
    
#     if(request.method == "POST"):
#         username = request.POST.get('username')
#         password = request.POST.get('password')
    
#         try:
#             user = User.objects.get(username=username)
#         except:
#             messages.error(request=request, message="Username does not exist")
        
#         user = authenticate(request=request, username=username, password=password)
#         if(user is not None):
#             login(request=request, user=user)
#             return redirect('home.html')
#         else:
#             messages.error(request=request, message="Username or password is incorrect")
    
#     return render(request=request, template_name="login_Page.html")

# def logout_User(request):
#     logout(request=request)
#     return redirect('home.html')

# def sign_Up_User(request):
#     if(request.method == "POST"):
#         username = request.POST.get('username')
#         email = request.POST.get('email')
#         password_1 = request.POST.get('password_1')
#         password_2 = request.POST.get('password_2')
#         if(password_1 == password_2):
#             user = User.objects.create_user(username=username, email=email, password=password_1)
#             return redirect("login_Page.html")
#         else:
#             messages.error(request=request, message="Your password and confirm password do not match.")
#     return render(request=request, template_name="sign_Up.html")

@api_view(['GET', 'POST'])
def user_List(request):
    if(request.method == "GET"):
        items = CustomUser.objects.all()
        serializer = CustomUser_Serializer(items, many=True)
        return Response(serializer.data)
    if(request.method == "POST"):
        serializer = CustomUser_Serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET', 'POST'])
def product_List(request):
    if(request.method == "GET"):
        products = Product.objects.all()
        serializer = Product_Serializer(products, many=True)
        return Response(serializer.data)
    
    if(request.method == "POST"):
        serializer = Product_Serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_Product(request, id):
    if(request.method == "DELETE"):
        try:
            product = Product.objects.get(Product_Id = id)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        operation = product.delete()
        if(operation):
            messages.success(request=request, message="Deleted successfully")
        else:
            messages.error(request=request, message="Delete unsuccessful")
# Register, Login, User view, logout 
@api_view(['POST'])
def register_User(request):
    serializer = CustomUser_Serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(request.data)

@api_view(['POST'])
def login_User(request):
    email = request.data['email']
    password = request.data['password']

    user = User.objects.filter(email=email).first()

    if(user is not None):
        raise AuthenticationFailed("User not found!!")
        
    if(not user.check_password(password)):
        raise AuthenticationFailed("Incorrect password")
        
    payload : {
        'id' : user.id,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30),
        'iat' : datetime.datetime.utcnow()
    }

    token = jwt.encode(payload=payload, key='secret', algorithm='HS256').decode('utf-8')

    response = Response()

    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt' : token
    }
    return response
    
@api_view(['GET'])
def user_View(request):
    token = request.COOKIES.get('jwt')

    if(not token):
        raise AuthenticationFailed("Unauthenticated")
        
    try:
        payload = jwt.decode(token, key='secret', algorithms='HS256')
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed("Unauthenticated")
    
    user = User.objects.filter(id=payload['id']).first()
    serializer = CustomUser_Serializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def logout_User(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message' : 'success'
    }
    return response

@api_view(['POST'])
def add_To_Cart(request):
    data = json.loads(request.body)
    Product_Id = data['id']
    product = Product.objects.get(Product_Id=Product_Id)
    if(request.user.is_authenticated()):
        cart, created = Cart.objects.get_or_create(user=request.user, completed=False)
        cart_Item, created = Cart_Item.objects.get_or_create(cart=cart, product=product)
        cart_Item.quantity += 1
        cart_Item.save()
    return JsonResponse(data="It is working", safe=False)

def cart(request):
    cart = None
    cartitems = []

    if(request.user.is_authenticated()):
        cart, created = Cart.objects.get_or_create(user=request.user, completed=False)
        cartitems = cart.cartitems.all()

    context = {
        "cart" : cart,
        "items" : cartitems
    }
    return render(request=request, template_name="cart.html")