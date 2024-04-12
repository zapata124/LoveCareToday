from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import os

uri= os.environ.get('MONGO_URI')
client = MongoClient(uri, server_api=ServerApi('1'))


db = client[os.environ.get('DB_NAME')]
collection = db[os.environ.get('COLLECTION_NAME')]

try:
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)