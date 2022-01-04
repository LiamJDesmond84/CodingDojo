from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, "index.html")

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:

        for key, value in errors.items():
            messages.error(request, value)

        return redirect('/')

    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']
    password = request.POST['password']


    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)
    logged_user = User.objects.create(first_name=f"{first_name}", last_name=f"{last_name}", email=f"{email}", password=pw_hash)
    request.session['userid'] = logged_user.id
    return redirect("/success")

def success(request):
    if "userid" not in request.session:
        return redirect("/")

    context = {"users": User.objects.all()}
    return render(request, "success.html", context)

def login(request):
    errors = User.objects.login(request.POST)
    if len(errors) > 0:

        for key, value in errors.items():
            messages.error(request, value)

        return redirect('/')
    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['userid'] = logged_user.id
            return redirect('/success')
    return redirect("/")

def logout(request):
    del request.session['userid']
    return redirect("/")