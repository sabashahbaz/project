import os 

class Config:
    #SECRET_KEY = os.getenv("SECREY_KEY")
    SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")