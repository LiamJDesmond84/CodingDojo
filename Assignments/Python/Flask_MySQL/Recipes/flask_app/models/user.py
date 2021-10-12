from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
from flask_app.models import recipe
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
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.recipes = []
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('recipes_shema').query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM users WHERE users.id = %(id)s;"
        user_from_db = connectToMySQL('recipes_shema').query_db(query,data)
        return cls(user_from_db[0])
    
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , password, created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(email)s , %(password)s, NOW() , NOW() );"
        return connectToMySQL('recipes_shema').query_db( query, data )

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('recipes_shema').query_db(query, data)
        users = []
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name=%(fname)s, last_name=%(lname)s, email=%(email)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('recipes_shema').query_db( query, data )

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL('recipes_shema').query_db( query, data)

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
        if len(user['fname']) < 2:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(user['lname']) < 2:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        return is_valid

    @staticmethod
    def password_match(user):
        is_valid = True
        if user["password"] != user["confirm"]:
            flash("Passwords must match.")
            is_valid = False
        return is_valid

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("recipes_shema").query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_user_with_recipes( cls , data ):
        query = "SELECT * FROM users LEFT JOIN recipes ON recipes.user_id = users.id WHERE users.id = %(id)s;"#Regular JOIN
        results = connectToMySQL('recipes_shema').query_db( query , data )
        
        user = cls( results[0] )
        for row_from_db in results:
            
            recipe_data = {
                "id" : row_from_db["recipes.id"],
                "name" : row_from_db["name"],
                "desciption" : row_from_db["desciption"],
                "instructions" : row_from_db["instructions"],
                "radio_state" : row_from_db["radio_state"],
                "created_at" : row_from_db["recipes.created_at"],
                "updated_at" : row_from_db["recipes.updated_at"]
            }
            user.recipes.append( recipe.Recipe( recipe_data ) )
        return user