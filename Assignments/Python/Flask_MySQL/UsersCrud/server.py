from flask import Flask, render_template, redirect, request

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
    user = User.save(data)
    return redirect(f"/users/{user}")

@app.route("/new")
def new():
    return render_template("new.html")

@app.route("/users/<int:id>")
def show(id):
    data = {
        "id": id
    }
    users = User.show(data)
    return render_template("show.html", all_users = users)

@app.route("/users/<id>/edit")
def edit(id):
    data = {
        "id": id
    }
    users = User.show(data)
    return render_template("edit.html", id=id,all_users = users)

@app.route("/users/<id>/process", methods=["POST"])
def edit_user(id):
    data = {
        "id": id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.edit(data)
    return redirect(f"/users/{id}")

@app.route("/users/<id>/destroy")
def destroy(id):
    data = {"id": id}
    User.destroy(data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)