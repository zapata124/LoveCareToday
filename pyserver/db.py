from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime

uri= "mongodb+srv://eddyzapata01:eddyzapata01@lovecaretodaycluster.dzj5s8u.mongodb.net/?retryWrites=true&w=majority&appName=LoveCareTodayCluster"
# uri= os.environ.get("URI", 'not available')
client = MongoClient(uri, server_api=ServerApi('1'))


# for testing !!

db = client["LoveCaretodayUsers"]

collection = db["LoveCareTodayUsers"]

user = {
    "name": "Juan",
    "lastName": "Zapata",
    "email": "Eddy@yahoo.com",
    "date":  datetime.datetime.now(tz=datetime.timezone.utc),
}

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    # add_user=collection.insert_one(user)
    current_user= collection.find_one({"name":"Eddy"})
    print(current_user)
except Exception as e:
    print(e)