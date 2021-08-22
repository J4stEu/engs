from flask import Flask
from config import Configuration
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

application = Flask(__name__, template_folder='static/frontendEngine', static_folder='static/assets')
application.config.from_object(Configuration)

cors = CORS(application, resources={r"/api/*": {"origins": "*"}})
db = SQLAlchemy(application)
migrate = Migrate(application, db)