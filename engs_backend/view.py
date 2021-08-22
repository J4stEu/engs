from app import application
from flask import render_template, send_from_directory
import os

@application.route('/', defaults={'path': ''})
@application.route('/<path:path>')
def serve(path):
    # for service worker
    if path != "" and os.path.exists(application.template_folder + '/' + path):
        return send_from_directory(application.template_folder, path)
    else:
        return render_template('index.html')