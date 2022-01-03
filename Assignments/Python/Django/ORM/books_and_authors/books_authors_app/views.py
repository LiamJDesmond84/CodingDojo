from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from .models import Author, Book

def index(request):
    context = {"authors_books" : Author.objects.all(),"books_authors": Book.objects.all()}
    return render(request, 'index.html', context)

def new_author(request):
    context = {"books": Book.objects.all()}
    return render(request, "new_author.html", context)

def new_book(request):
    context = {"authors": Author.objects.all()}
    return render(request, "new_book.html", context)

def process_author(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    notes = request.POST['notes']

    new_author = Author.objects.create(first_name=f"{first_name}", last_name=f"{last_name}", notes=f"{notes}")
    author_id = new_author.id

    return redirect(f"/view_author/{author_id}")

def process_book(request):
    title = request.POST['title']
    desc = request.POST['desc']

    new_book = Book.objects.create(title=f"{title}", desc=f"{desc}")
    book_id = new_book.id

    return redirect(f"/view_book/{book_id}")

def view_author(request, id):
    print(id)
    author_id = id
    context = {
        "one_author": Author.objects.get(id=author_id),
        "books": Book.objects.all(),
        "authors_books" : Author.objects.get(id=author_id).books.all()
        }
    print(context["authors_books"])
    return render(request, "view_author.html", context)

def view_book(request, id):
    book_id = id
    context = {
        "one_book": Book.objects.get(id=id),
        "authors": Author.objects.all(),
        "books_authors": Book.objects.get(id=book_id).authors.all()}
    return render(request, "view_book.html", context)

def author_book(request, id):
    book_id = request.POST["book_id"]
    author_id = id

    Author.objects.get(id=author_id).books.add(Book.objects.get(id=book_id))
    return redirect("/")

def book_author(request, id):
    author_id = request.POST["author_id"]
    book_id = id

    Book.objects.get(id=book_id).authors.add(Author.objects.get(id=author_id))
    return redirect("/")

def delete_author(request, id):
    Author.objects.get(id=id).delete()
    return redirect("/")