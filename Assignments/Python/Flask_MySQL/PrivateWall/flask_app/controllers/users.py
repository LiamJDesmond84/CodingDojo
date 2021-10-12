from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.user import User
from flask_app.models.message import Message
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
    data2 = {"id" : user_id}
    User.welcome(data2)
    session["user"] = user_id, user_in_db
    return redirect(f"/dashboard/{user_id}")

@app.route("/dashboard/<int:user_id>")
def dashboard(user_id):
    data = {
        'id': user_id
    }
    if "user" in session:
        user = User.get_one(data)
        all_messages = Message.get_messages_with_user(data)
        all_users = User.get_user_with_messages(data)
        return render_template("dashboard.html", all_users = all_users, user = user, all_messages = all_messages)
    return redirect("/")

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
    return redirect(f"/dashboard/{session['user']}")

@app.route('/logout')
def logout():
    session.clear()
    return redirect("/")

@app.route('/sendmessageL/<int:user_id>',methods=['POST'])
def sendmessageL(user_id):
    data = {
            "message" : request.form["message"],
            "id" : user_id}
    User.send_message_to_liam(data)
    User.add_message_to_liam(data)
    return redirect(f"/dashboard/{user_id}")

@app.route('/sendmessageK/<int:user_id>',methods=['POST'])
def sendmessageK(user_id):
    data = {
            "message" : request.form["message"],
            "id" : user_id}
    User.send_message_to_karl(data)
    User.add_message_to_karl(data)
    return redirect(f"/dashboard/{user_id}")

@app.route('/sendmessageN/<int:user_id>',methods=['POST'])
def sendmessageN(user_id):
    data = {
            "message" : request.form["message"],
            "id" : user_id}
    User.send_message_to_norm(data)
    User.add_message_to_norm(data)
    return redirect(f"/dashboard/{user_id}")

@app.route('/sendmessageS/<int:user_id>',methods=['POST'])
def sendmessageS(user_id):
    data = {
            "message" : request.form["message"],
            "id" : user_id}
    User.send_message_to_sour(data)
    User.add_message_to_sour(data)
    return redirect(f"/dashboard/{user_id}")

