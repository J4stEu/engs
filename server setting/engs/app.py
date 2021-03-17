from flask import Flask
from config import Configuration
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

#from flask_script import Manager
#from flask_migrate import Migrate, MigrateCommand

#from flask_cors import CORS

#application = Flask(__name__, static_folder='static/shared_assets', template_folder='static/engs_frontendEngine')
#application = Flask(__name__, static_folder='../static/shared_assets', template_folder='../static/engs_frontendEngine')
application = Flask(__name__, static_folder='static/shared_assets', template_folder='static/engs_frontendEngine')
#application = Flask(__name__, static_folder='../static')

application.config.from_object(Configuration)
db = SQLAlchemy(application)

#migrate = Migrate(application, db)
#manager = Manager(application)
#manager.add_command('db', MigrateCommand)

CORS(application)
cors = CORS(application, resources={r"/api/*": {"origins": "*"}})