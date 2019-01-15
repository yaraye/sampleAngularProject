from flask import Flask
app = Flask(__name__)

# //routing in python
@app.route("/")
def hello():
    return "Hello World!"




#    ** Installing and using virtualenv with Python 2
#     pip install virtualenv

#    ** when we start a new project
#     virtualenv --python=/usr/bin/python2.7 env

#    ** everytime we open our project
#     source env/bin/activate

#     **  to install flask
#     $ pip install Flask

#    ** to run the project
#     FLASK_APP=index.py flask run