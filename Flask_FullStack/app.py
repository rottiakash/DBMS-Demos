from flask import Flask
from flask.templating import render_template
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="demo",
    database="Demo"
)

mycursor = mydb.cursor()
app = Flask(__name__)


@app.route("/")
def index():
    mycursor.execute("SELECT * FROM Students")

    myresult = mycursor.fetchall()

    res = []

    for i in myresult:
        res.append({"usn": i[0], "name": i[1]})

    return render_template('index.html', result=res)


if __name__ == "__main__":
    app.run(debug=True)
