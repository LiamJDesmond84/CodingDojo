from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'key1'

@app.route('/')
def index():
    if 'counter' in session:
        print('key exists!')
    else:
        print("key 'key_name' does NOT exist")
        session["counter"] = 0
    session["counter"]+=1
    return render_template("index.html")

@app.route('/views', methods=['POST'])
def views():
    # session["counter"] = session["counter"] + 1
    return redirect("/")

@app.route("/add2", methods=["POST"])
def add2():
    session["counter"] = session["counter"] + 1
    return redirect("/")

@app.route("/reset", methods=["POST"])
def reset():
    session.clear() # clears all keys
    #session.pop('key_name')		# clears a specific key
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True)