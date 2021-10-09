from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.book import Book
from flask_app.models.author import Author


@app.route('/')
def index():
    return redirect('/addauthor')

@app.route('/addauthor')
def authors():
    return render_template("addauthor.html", all_authors=Author.get_all(),all_books=Book.get_all())

@app.route("/addbook")
def newbook():
    return render_template("addbook.html",all_authors=Author.get_all(),all_books=Book.get_all())

@app.route("/createbook", methods=["POST"])
def createbook():
    data = {
        "title": request.form['title'],
        "num_of_pages": request.form['num_of_pages']
    }
    Book.save(data)
    return redirect('/addbook')

@app.route("/createauthor", methods=["POST"])
def createauthor():
    data = {
        "name": request.form["name"]
    }
    Author.save(data)
    return redirect('/addauthor')

@app.route('/showbooks')
def showbooks():
    return render_template("showbooks.html",all_books=Book.get_all())

@app.route("/showauthor/<int:author_id>")
def showauthor(author_id):
    data = {
            "id": author_id
        }
    authors=Author.get_author_with_books(data)
    
    return render_template("showauthors.html", authors=authors,all_books=Book.get_all(),author=Author.get_one(data))

@app.route('/show/<int:book_id>')
def detail_page(book_id):
    data = {
        'id': book_id
    }
    books=Book.get_books_with_authors(data)
    print(books)
    return render_template("bookdetails.html",books=books,book=Book.get_one(data),all_authors=Author.get_all())

@app.route('/edit_book/<int:book_id>')
def edit_page(book_id):
    data = {
        'id': book_id
    }
    return render_template("edit_book.html", book = Book.get_one(data))

@app.route('/update/<int:book_id>', methods=['POST'])
def update(book_id):
    data = {
        'id': book_id,
        "title":request.form['title'],
        "num_of_pages": request.form['num_of_pages']
    }
    Book.update(data)
    return redirect(f"/show/{book_id}")

@app.route('/delete/<int:book_id>')
def delete(book_id):
    data = {
        'id': book_id,
    }
    Book.destroy(data)
    return redirect('/showbooks')

@app.route('/deleteA/<int:author_id>')
def deleteA(author_id):
    data = {
        'id': author_id,
    }
    Author.destroy(data)
    return redirect('/addauthor')

@app.route('/favorite/<int:author_id>', methods=['POST'])
def favorites(author_id):
    data = {"author_id": author_id,
            "book_id": request.form['book_id']
            }
    Book.favorite(data)
    return redirect (f"/showauthor/{author_id}")

@app.route('/favorited/<int:book_id>', methods=['POST'])
def favorited(book_id):
    data = {"book_id": book_id,
            "author_id": request.form['author_id']
            }
    Book.favorite(data)
    return redirect (f"/show/{book_id}")