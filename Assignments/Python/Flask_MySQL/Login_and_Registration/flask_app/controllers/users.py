from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.user import User
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
    
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
        
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"],
        "username" : request.form["password"],
        "password" : pw_hash
    }
    user_id = User.save(data)
    session["user"] = user_id, user_in_db
    return redirect("/success")

@app.route("/success")
def success():
    if "user" in session:
        return render_template("success.html")
    return redirect("/")

@app.route("/login", methods=["POST"])
def login():
    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    user_in_db = User.get_by_email(data)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')
    session['user'] = user_in_db.id
    return redirect("/success")

@app.route('/logout')
def logout():
    session.clear()
    return redirect("/")
