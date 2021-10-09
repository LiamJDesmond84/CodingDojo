from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import author

class Book:
    def __init__( self , db_data ):
        self.id = db_data['id']
        self.title = db_data['title']
        self.num_of_pages = db_data['num_of_pages']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

        self.authors = []
    @classmethod
    def save( cls , data ):
        query = "INSERT INTO books (title , num_of_pages, created_at , updated_at ) VALUES (%(title)s, %(num_of_pages)s,NOW(),NOW());"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def favorite(cls, data):
        query = "INSERT INTO favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM books WHERE books.id = %(id)s;"
        book_from_db = connectToMySQL('books_schema').query_db(query,data)
        return cls(book_from_db[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        books_from_db =  connectToMySQL('books_schema').query_db(query)
        books =[]
        for b in books_from_db:
            books.append(cls(b))
        return books

    @classmethod
    def update(cls,data):
        query = "UPDATE books SET title=%(title)s, num_of_pages=%(num_of_pages)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM books WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def get_books_with_authors( cls , data ):
        query = "SELECT * FROM books LEFT JOIN favorites ON favorites.book_id = books.id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s;"#LEFT JOIN
        results = connectToMySQL('books_schema').query_db( query , data )
        
        book = cls( results[0] )
        for row_from_db in results:
            # Now we parse the book data to make instances of books and add them into our list.
            author_data = {
                "id" : row_from_db["authors.id"],
                "name" : row_from_db["name"],
                "created_at" : row_from_db["authors.created_at"],
                "updated_at" : row_from_db["authors.updated_at"]
            }
            book.authors.append( author.Author( author_data ) )
        return book