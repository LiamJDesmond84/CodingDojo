from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book

class Author:
    def __init__( self , db_data ):
        self.id = db_data['id']
        self.name = db_data['name']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

        self.books = []
    
    @classmethod
    def save( cls , data ):
        query = "INSERT INTO authors ( name , created_at , updated_at ) VALUES (%(name)s,NOW(),NOW());"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def favorite(cls, data):
        query = "INSERT INTO favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM authors WHERE authors.id = %(id)s;"
        book_from_db = connectToMySQL('books_schema').query_db(query,data)
        return cls(book_from_db[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        authors_from_db =  connectToMySQL('books_schema').query_db(query)
        authors =[]
        for r in authors_from_db:
            authors.append(cls(r))
        return authors

    @classmethod
    def update(cls,data):
        query = "UPDATE authors SET name=%(name)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM authors WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query,data)

    @classmethod
    def get_author_with_books( cls , data ):
        query = "SELECT * FROM authors LEFT JOIN favorites ON favorites.author_id = authors.id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s;"#LEFT JOIN
        results = connectToMySQL('books_schema').query_db( query , data )
        
        author = cls( results[0] )
        for row_from_db in results:
            # Now we parse the book data to make instances of books and add them into our list.
            book_data = {
                "id" : row_from_db["books.id"],
                "title" : row_from_db["title"],
                "num_of_pages" : row_from_db["num_of_pages"],
                "created_at" : row_from_db["books.created_at"],
                "updated_at" : row_from_db["books.updated_at"]
            }
            author.books.append( book.Book( book_data ) )
        return author