import flask
from flask import Flask, render_template, url_for

app = flask.Flask(__name__)
with app.test_request_context():
    print(flask.url_for("static", filename="static/play.css"))

@app.route('/')
def hello_world():
    return render_template("index.html", phrase="hello", times=5)




@app.route("/play/<int:num>/<string:color>")
def play(num, color):
    return render_template("play.html", num=num, color=color)



if __name__=="__main__":
    app.run(debug=True)