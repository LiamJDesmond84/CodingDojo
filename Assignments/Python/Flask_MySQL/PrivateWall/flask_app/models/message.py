from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
from flask_app.models import user
from flask_app import app


class Message:
    def __init__( self , data ):
        self.id = data['id']
        self.user_id = data['user_id']
        self.message_id = data['message_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.users = []

    @classmethod
    def get_messages_with_user( cls , data ):
        query = "Select * FROM users LEFT JOIN messages ON messages.user_id = users.id JOIN users as user2 ON user2.id = messages.user_id WHERE message_id = %(id)s;"#Regular JOIN
        results = connectToMySQL('private_wall_schema').query_db( query , data )
        
        message = cls( results[0] )
        for row_from_db in results:
            print(row_from_db)
            user_data = {
                "id" : row_from_db["id"],
                "first_name" : row_from_db["first_name"],
                "last_name" : row_from_db["last_name"],
                "email" : row_from_db["email"],
                "password" : row_from_db["password"],
                "message" : row_from_db["message"],
                
                "created_at" : row_from_db["created_at"],
                "updated_at" : row_from_db["updated_at"]
            }
            message.users.append( user.User( user_data ) )
        return message

