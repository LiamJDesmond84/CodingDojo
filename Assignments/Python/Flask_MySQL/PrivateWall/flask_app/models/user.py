from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
from flask_app.models import message
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.message = data['message']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.messages = []
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('private_wall_schema').query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM users WHERE users.id = %(id)s;"
        user_from_db = connectToMySQL('private_wall_schema').query_db(query,data)
        return cls(user_from_db[0])
    
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , password, created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(email)s , %(password)s, NOW() , NOW() );"
        return connectToMySQL('private_wall_schema').query_db( query, data )
    @classmethod
    def welcome(cls, data):
        query = "INSERT INTO messages (user_id, message_id) VALUES (5, %(id)s);"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    # @classmethod
    # def destroy_message(cls, data):
    #     query = "DELETE FROM message WHERE message_id = %(message_id)s AND user_id = %(id)s"
    #     return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('private_wall_schema').query_db(query, data)
        users = []
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name=%(fname)s, last_name=%(lname)s, email=%(email)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data)

    @staticmethod
    def validate_user( user ):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_name(user):
        is_valid = True # we assume this is true
        if len(user['fname']) < 3:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(user['lname']) < 3:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        return is_valid
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("private_wall_schema").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def send_message_to_liam(cls, data):
        query = "UPDATE users SET message=%(message)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def add_message_to_liam(cls, data):
        query = "INSERT INTO messages (user_id, message_id) VALUES (%(id)s, 1);"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def send_message_to_karl(cls, data):
        query = "UPDATE users SET message=%(message)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def add_message_to_karl(cls, data):
        query = "INSERT INTO messages (user_id, message_id) VALUES (%(id)s, 3);"
        return connectToMySQL('private_wall_schema').query_db( query, data )
    @classmethod
    def send_message_to_norm(cls, data):
        query = "UPDATE users SET message=%(message)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data )
    @classmethod
    def add_message_to_norm(cls, data):
        query = "INSERT INTO messages (user_id, message_id) VALUES (%(id)s, 4);"
        return connectToMySQL('private_wall_schema').query_db( query, data )
    @classmethod
    def send_message_to_sour(cls, data):
        query = "UPDATE users SET message=%(message)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('private_wall_schema').query_db( query, data )
    @classmethod
    def add_message_to_liam(cls, data):
        query = "INSERT INTO messages (user_id, message_id) VALUES (%(id)s, 2);"
        return connectToMySQL('private_wall_schema').query_db( query, data )

    @classmethod
    def get_user_with_messages( cls , data ):
        query = "Select * FROM users LEFT JOIN messages ON messages.user_id = users.id JOIN users as user2 ON user2.id = messages.user_id WHERE message_id = %(id)s;"#Regular JOIN
        results = connectToMySQL('private_wall_schema').query_db( query , data )
        
        user = cls( results[0] )
        for row_from_db in results:
            print(row_from_db)
            message_data = {
                "id" : row_from_db["messages.id"],
                "user_id" : row_from_db["user_id"],
                "message_id" : row_from_db["message_id"],
                
                "created_at" : row_from_db["messages.created_at"],
                "updated_at" : row_from_db["messages.updated_at"]
            }
            user.messages.append( message.Message( message_data ) )
        return user