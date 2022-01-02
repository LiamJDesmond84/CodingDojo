from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from time import gmtime, strftime

def index(request):
    
    if 'key' in request.session:
        request.session["counter"] += 1
        context = {"counter":request.session["counter"]}
        print('key exists!')
        return render(request,"index.html", context)
    else:
        print("key 'key_name' does NOT exist")
        request.session["counter"] = 0
        request.session["key"] = "key"
        return redirect("/")

def destroy(request):
        del request.session["key"]
        del request.session["counter"]
        return redirect("/")

