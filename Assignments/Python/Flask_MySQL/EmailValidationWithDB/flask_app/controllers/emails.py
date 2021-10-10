from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.email import Email

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/addEmail', methods=["POST"])
def create_user():
    if not Email.validate_user(request.form):
        return redirect('/')
    session["email"] = request.form['email']
        
    data = {
        "email" : request.form["email"]
    }
    Email.save(data)
    return redirect("/success")

@app.route("/success")
def success():
    emails = Email.get_all()
    return render_template("success.html", emails=emails)

@app.route("/destroy/<int:email_id>")
def destroy(email_id):
    data = {"id": email_id}
    Email.destroy(data)
    return redirect('/success')



@app.route("/new")
def new():
    return render_template("new.html")

@app.route("/emails/<int:id>")
def show(id):
    data = {
        "id": id
    }
    emails = Email.show(data)
    return render_template("show.html", all_emails = emails)

@app.route("/emails/<id>/edit")
def edit(id):
    data = {
        "id": id
    }
    emails = Email.show(data)
    return render_template("edit.html", id=id,all_emails = emails)

# @app.route("/emails/<id>/process", methods=["POST"])
# def edit_user(id):
#     data = {
#         "id": id,
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "email" : request.form["email"]
#     }
#     Email.edit(data)
#     return redirect(f"/emails/{id}")
