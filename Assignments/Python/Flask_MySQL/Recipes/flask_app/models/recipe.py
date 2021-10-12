from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
from flask_app.models import user
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.desciption = data['desciption']
        self.instructions = data['instructions']
        self.radio_state = data['radio_state']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.users = []
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL('recipes_shema').query_db(query)
        recipes = []
        for recipe in results:
            recipes.append( cls(recipe) )
        return recipes
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM recipes WHERE recipes.id = %(id)s;"
        recipe_from_db = connectToMySQL('recipes_shema').query_db(query,data)
        return cls(recipe_from_db[0])
    
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO recipes ( user_id, name , desciption , instructions , radio_state, created_at, updated_at ) VALUES (%(id)s, %(name)s , %(desciption)s , %(instructions)s , %(radio_state)s , %(created_at)s , NOW() );"
        return connectToMySQL('recipes_shema').query_db( query, data )

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL('recipes_shema').query_db(query, data)
        recipes = []
        for recipe in results:
            recipes.append( cls(recipe) )
        return recipes

    @classmethod
    def edit(cls, data):
        query = "UPDATE recipes SET name=%(name)s, desciption=%(desciption)s, instructions=%(instructions)s, radio_state=%(radio_state)s, updated_at=%(updated_at)s WHERE id = %(id)s;"
        return connectToMySQL('recipes_shema').query_db( query, data )

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes_shema').query_db( query, data)


