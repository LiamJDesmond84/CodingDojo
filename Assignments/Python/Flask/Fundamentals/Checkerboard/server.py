import flask
from flask import Flask, render_template, url_for

app = flask.Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")




@app.route("/checkers/<int:x>/<int:y>")
def checker(x, y):
    return render_template("checker.html", x=x, y=y)



if __name__=="__main__":
    app.run(debug=True)