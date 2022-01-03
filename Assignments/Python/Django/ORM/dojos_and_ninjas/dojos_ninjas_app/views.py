from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from .models import Dojo, Ninja

def index(request):
    context = {
        "dojos": Dojo.objects.all(),
        "ninjas": Ninja.objects.all(),
        }

    return render(request, 'index.html', context)

def new_dojo(request):
    name = request.POST['name']
    city = request.POST['city']
    state = request.POST['state']

    Dojo.objects.create(name=f"{name}", city=f"{city}", state=f"{state}")
    return redirect("/")

def new_ninja(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    dojo = int(request.POST['dojo'])

    Ninja.objects.create(first_name=f"{first_name}", last_name=f"{last_name}", dojo=Dojo.objects.get(id=f"{dojo}"))
    return redirect("/")

def delete_dojo(request, id):
    Dojo.objects.filter(id=id).delete()
    return redirect("/")
