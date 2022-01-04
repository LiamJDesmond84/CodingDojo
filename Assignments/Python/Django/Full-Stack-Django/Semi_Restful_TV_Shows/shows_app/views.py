from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from .models import Show
from django.contrib import messages

def index(request):

    return redirect("/shows")

def shows(request):
    context = {"shows": Show.objects.all()}
    return render(request, "shows.html", context)

def new_show(request):
    return render(request, "new_show.html")

def process_new_show(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:

        for key, value in errors.items():
            messages.error(request, value)

        return redirect('/new_show')

    title = request.POST['title']
    network = request.POST['network']
    release_date = request.POST['release_date']
    desc = request.POST['desc']

    new_show = Show.objects.create(title=f"{title}", network=f"{network}", release_date=f"{release_date}", desc=f"{desc}")
    show_id = new_show.id

    return redirect(f"/view_show/{show_id}")


def view_show(request, id):
    print(id)
    show_id = id
    context = {"one_show": Show.objects.get(id=show_id),}
    return render(request, "view_show.html", context)

def edit_show(request, id):
    show_id = id
    context = {"one_show": Show.objects.get(id=show_id),}
    return render(request, "edit_show.html", context)

def edit_show_process(request, id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:

        for key, value in errors.items():
            messages.error(request, value)

        return redirect(f'/edit_show/{id}')

    show_id = id
    title = request.POST['title']
    network = request.POST['network']
    release_date = request.POST['release_date']
    desc = request.POST['desc']
    show = Show.objects.get(id=show_id)
    show.title=f"{title}"
    show.network=f"{network}"
    show.release_date=f"{release_date}"
    show.desc=f"{desc}"
    show.save()

    return redirect(f"/view_show/{show_id}")



def delete_show(request, id):
    Show.objects.get(id=id).delete()
    return redirect("/shows")