from flask import Flask
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="demo",
    database="Demo"
)

mycursor = mydb.cursor()
app = Flask(__name__)


@app.route("/getStudents")
def getStudents():
    mycursor.execute("SELECT * FROM Students")

    myresult = mycursor.fetchall()

    res = []

    for i in myresult:
        res.append({"usn": i[0], "name": i[1]})

    return {"Students": res}


if __name__ == "__main__":
    app.run(debug=True)
