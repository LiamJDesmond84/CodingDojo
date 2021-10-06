from flask import Flask, render_template, redirect, request
# import the class from friend.py
from user import User
app = Flask(__name__)
@app.route("/")
def index():
    
    users = User.get_all()
    print(users)
    return render_template("index.html", all_users = users)

@app.route('/addNew', methods=["POST"])
def create_user():
    
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    
    User.save(data)
    
    return redirect('/')

@app.route("/new")
def new():
    return render_template("new.html")

if __name__ == "__main__":
    app.run(debug=True)