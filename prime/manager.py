from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, username, phone_Number, password=None, **extra_fields):
        if(not username):
            raise ValueError("Username is required.")
        extra_fields['email'] = self.normalize_email(extra_fields['email'])
        user = self.model(username=username, phone_Number=phone_Number, password=password, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_superuser(self, username, phone_Number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        return self.create_user(username=username, phone_Number=phone_Number, password=password, **extra_fields)
    
    