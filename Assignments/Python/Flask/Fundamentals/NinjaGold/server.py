import random
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'key1'


@app.route('/')
def index():
    if "gold" not in session:
        session["gold"] = 0
    return render_template("index.html")


@app.route('/process', methods=['POST'])
def process():
    session["message"] = []
    session["message2"] = []
    if request.form['building'] == "farm":
        
        session["add"] = random.randint(10, 20)
        session["gold"] += session["add"]
        add = session["add"]
        session["message"].append(f"You added {add} gold from the farm!")
    elif request.form['building'] == "cave":
        session["add1"] = random.randint(5, 10)
        session["gold"] += session["add1"]
        add = session["add1"]
        session["message"].append(f"You added {add} gold from the cave!")
    elif request.form['building'] == "house":
        session["add2"] = random.randint(2, 5)
        session["gold"] += session["add2"]
        add = session["add2"]
        session["message"].append(f"You added {add} gold from the house!")
    elif request.form['building'] == "casino":
        session["add3"] = random.randint(-50, 50)
        session["gold"] += session["add3"]
        add = session["add3"]
        if add > 0:
            session["message"].append(f"You added {add} gold from the casino!")
        elif add < 0:
            session["message2"].append(f"You lost {add} gold from the casino!")
    elif request.form['building'] == "reset":
        session.clear()
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True)