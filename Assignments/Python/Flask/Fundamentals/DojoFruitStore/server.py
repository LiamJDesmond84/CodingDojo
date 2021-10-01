from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form["strawberry"])
    print(request.form["raspberry"])
    print(request.form["apple"])
    num1 = request.form["strawberry"]
    num2 = request.form["raspberry"]
    num3 = request.form["apple"]
    fname = request.form["first_name"]
    lname = request.form["last_name"]
    stid = request.form["student_id"]
    count = int(num1) + int(num2) + int(num3)
    print(f"Charging {fname} {lname} for {count} fruits")
    return render_template("checkout.html", num1=num1, num2=num2, num3=num3, fname=fname, lname=lname, stid=stid, count=count)

@app.route('/fruits')
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":
    app.run(debug=True)

