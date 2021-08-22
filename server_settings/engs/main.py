from app import application
from app import db
#from app import migrate, manager
import view
import api

if __name__ == '__main__':
    application.run(host='192.168.31.247')
    #manager.run()