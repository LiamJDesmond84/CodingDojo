from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from time import gmtime, strftime
import random 	                # import the random module
random.randint(1, 100) 		# random number between 1-100

def index(request):
    request.session["random"] = random.randint(1, 100)
    return render(request, 'index.html')

def process(request):
    guess = int(request.POST["guess"])
    if guess > request.session["random"]:
        print("Too High!")
        request.session["answer"] = "Too High!"
        request.session["color"] = "red"
    if guess < request.session["random"]:
        print("Too Low!")
        request.session["answer"] = "Too Low!"
        request.session["color"] = "yellow"
    if guess == request.session["random"]:
        print("Good Guess!")
        request.session["answer"] = "Good Guess!"
    return redirect("/")
