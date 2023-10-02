from django.urls import path
from prime import views

urlpatterns = [
    path('', view=views.user_List),
    path('products/', view=views.product_List),
    path('login/', view=views.login_User),
    path('logout/', view=views.logout_User),
    path('register/', view=views.register_User),
    path('user/', view=views.user_View),
    path('delete/<int:id>', view=views.delete_Product)
]