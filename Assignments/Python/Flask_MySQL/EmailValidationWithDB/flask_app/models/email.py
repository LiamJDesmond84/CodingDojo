from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_validation_schema').query_db(query)
        emails = []
        for e in results:
            emails.append( cls(e) )
        return emails
    
    @classmethod
    def save(cls, data ):
        query = "INSERT IGNORE INTO emails ( email, created_at, updated_at ) VALUES (%(email)s , NOW() , NOW() );"
        return connectToMySQL('email_validation_schema').query_db( query, data )

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM emails WHERE id = %(id)s;"
        results = connectToMySQL('email_validation_schema').query_db(query, data)
        emails = []
        for email in results:
            emails.append( cls(email) )
        return emails

    # @classmethod
    # def edit(cls, data):
    #     query = "UPDATE emails SET email=%(email)s, updated_at=NOW() WHERE id = %(id)s;"
    #     return connectToMySQL('users_schema').query_db( query, data )

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s;"
        return connectToMySQL('email_validation_schema').query_db( query, data)

    @staticmethod
    def validate_user( user ):
        is_valid = True
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_name(user):
        is_valid = True
        if len(user['fname']) < 3:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(user['lname']) < 3:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        return is_valid