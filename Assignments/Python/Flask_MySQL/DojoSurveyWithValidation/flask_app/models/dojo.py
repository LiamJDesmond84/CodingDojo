from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__( self , db_data ):
        self.id = db_data['id']
        self.name = db_data['name']
        self.location = db_data['location']
        self.language = db_data['language']
        self.comment = db_data['comment']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

    @classmethod
    def save( cls , data ):
        query = "INSERT INTO dojos (name , location, language, comment, created_at , updated_at ) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s,NOW(),NOW());"
        return connectToMySQL('dojo_survey_schema').query_db(query,data)

    @staticmethod
    def validate_burger(ninja):
        is_valid = True # we assume this is true
        if len(ninja['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(ninja['comment']) < 3:
            flash("Comment must be at least 3 characters")
            is_valid = False
        return is_valid