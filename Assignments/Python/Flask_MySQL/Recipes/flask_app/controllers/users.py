import re
from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask import flash
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/register', methods=["POST"])
def create_user():
    if not User.validate_name(request.form):
        return redirect('/')
    if not User.validate_user(request.form):
        return redirect('/')
    data = { "email" : request.form["email"] }
    # see if the username provided exists in the database
    user_in_db = User.get_by_email(data)
    if user_in_db:
        flash("Email in use")
        return redirect("/")
    if not User.password_match(request.form):
        return redirect('/')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
        
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"],
        "username" : request.form["password"],
        "password" : pw_hash
    }
    user = User.save(data)
    session["user"] = user_in_db
    return redirect(f"/main/{user}")

@app.route("/recipes/new/<int:user_id>")
def new(user_id):
    if "user" in session:
        data = { "id": user_id}
        
        return render_template("new_recipe.html", user = User.get_one(data))
    return redirect("/")

@app.route("/recipes/create", methods=["POST"])
def createrecipe():
    data = {
        "id" : session["user"],
        "name":request.form['name'],
        "desciption": request.form['desciption'],
        "instructions": request.form['instructions'],
        "created_at" : request.form["created_at"],
        "radio_state" : request.form["radio"]
    }
    user = session["user"]
    Recipe.save(data)
    return redirect(f'/main/{user}')

@app.route("/login", methods=["POST"])
def login():
    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    # user = { "user" : request.form["user"]}
    user_in_db = User.get_by_email(data)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')
    session['user'] = user_in_db.id
    return redirect(f"/main/{session['user']}")

@app.route("/main/<int:user_id>")
def main(user_id):
        
    if "user" in session:
        data = {"id": user_id}
        user = User.get_one(data)
        all_recipes = Recipe.get_all()
        all_users = User.get_user_with_recipes(data)
        return render_template("main.html", all_recipes = all_recipes, user = user,all_users=all_users)
    return redirect("/")

@app.route('/logout')
def logout():
    session.clear()
    return redirect("/")

@app.route('/destroy/<int:recipe_id>')
def delete(recipe_id):
    data = {
        'id': recipe_id,
    }
    user = session["user"]
    Recipe.destroy(data)
    return redirect(f'/main/{user}')

@app.route('/recipes/show/<int:recipe_id>')
def show_recipe(recipe_id):
    data = {
        'id': recipe_id
    }
    data2 = {
        "id" : session["user"]
    }
    return render_template("show_recipe.html", recipe = Recipe.get_one(data),user = User.get_one(data2))

@app.route("/recipes/edit/<int:recipe_id>")
def edit_recipe(recipe_id):
    if "user" in session:
        data = {"id": recipe_id}
        recipes = Recipe.get_one(data)
        data2 = {
        "id" : session["user"]
        }
        user = User.get_one(data2)
        return render_template("edit_recipe.html", recipes=recipes, user=user)
    return ("/")

@app.route('/update/<int:recipe_id>', methods=['POST'])
def update(recipe_id):
    data = {
        'id': recipe_id,
        "name":request.form['name'],
        "desciption": request.form['desciption'],
        "instructions": request.form['instructions'],
        "updated_at" : request.form["updated_at"],
        "radio_state" : request.form["radio"]
    }
    user = session["user"]
    Recipe.edit(data)
    return redirect(f"/main/{user}")

