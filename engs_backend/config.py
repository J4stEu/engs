class Configuration(object):
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    # SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root3:root3@localhost:3306/engs'
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root3:root3@localhost:3306/engs?auth_plugin=mysql_native_password'