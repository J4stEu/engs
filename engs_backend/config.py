class Configuration(object):
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root3:root3@localhost:3306/engs?auth_plugin=mysql_native_password'
    # SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://u1455823_default:xy1f6tDqI1rS84mC@localhost/u1455823_engs'