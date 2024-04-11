from ariadne import convert_kwargs_to_snake_case
from db import (client, collection)
from bson.json_util import dumps
import asyncio

client.admin.command('ping')
print("Pinged your deployment. You successfully connected to MongoDB!")
current_user= collection.find_one({"name":"Eddy"})
print(current_user)
print('hello')

testUser = {
    "id": "ID",
    "name": "String",
    "lastName": "String",
    "email":" String"
}

def getUser_resolver(obj, info):
    try:
        print(obj, info)
        return testUser
    except Exception as error:
        return error

@convert_kwargs_to_snake_case
def authenticateUser_resolver(obj, info, email, password):
    try:
        print(email, password, obj, info)
        return testUser
    except Exception as error:  # todo not found
        return error
    
@convert_kwargs_to_snake_case
async def createUser_resolver(obj, info, name, lastname, email, password):
    try:
        print(name, lastname, email, password, obj, info)
        client
        new_user= await  asyncio.collection.insert_one({"name": name, "lastName": lastname, "email": email, "password": password})
        print('this', new_user)
        return new_user
    except Exception as error:  # todo not found
        return error