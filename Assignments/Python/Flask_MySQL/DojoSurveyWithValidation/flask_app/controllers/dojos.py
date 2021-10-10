from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.dojo import Dojo


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    if not Dojo.validate_burger(request.form):
        return redirect('/')
    session["name"] = request.form['name']
    session["comment"] = request.form['comment']
    session["location"] = request.form['location']
    session["language"] = request.form['language']

    data = {"name":request.form['name'],
            "location":request.form['location'],
            "language":request.form['language'],
            "comment":request.form['comment']
    }
    Dojo.save(data)
    return redirect("/result")

@app.route('/result')
def result():
    return render_template("result.html")


@app.route('/goback')
def goback():
    session.clear()
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True)