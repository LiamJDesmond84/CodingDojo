import random
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = KEY



@app.route('/')
def hello_world():
    session["answer"] = random.randint(1, 100)
    return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guess():
    session["guess"] = int(request.form['guess'])# converts text answer from str to int, otherwise could not compare with < or >
    if session["answer"] == session["guess"]:
        print("Good Guess")
    elif session["answer"] > session["guess"]:
        print("Too Low!")
        session["message"] = "Too Low!"
    elif session["answer"] < session["guess"]:
        print("Too High!")
        session["message"] = "Too High!"
    else:
        print("Sorry")
    return redirect("/")

@app.route("/reset", methods=["POST"])
def reset():
    session["message"] = ""
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True)
