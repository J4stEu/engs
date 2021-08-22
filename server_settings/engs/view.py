from app import application
from flask import render_template

#@application.route('/')
#def index():
#    return render_template('index.html')

@application.route('/', defaults={'path': ''})
@application.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')