import random
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'key1'


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    session["name"] = request.form['name']
    session["comment"] = request.form['comment']
    session["city"] = request.form['city']
    session["language"] = request.form['language']
    # session["subscribe"] = request.form['subscribe']

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