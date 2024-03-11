from ariadne import convert_kwargs_to_snake_case
from db import (collection)
from bson.json_util import dumps

def getUser_resolver(obj, info):
    try:
        current_user= collection.find_one({"name":"Eddy"})
        print(obj, info)
        return current_user
    except Exception as error:
        return error

@convert_kwargs_to_snake_case
def authenticateUser_resolver(obj, info, email, password):
    try:
        current_user= collection.find_one({"email": email, "password": password})
        print(email, password, current_user)
        return current_user
    except Exception as error:  # todo not found
        return error
    
@convert_kwargs_to_snake_case
def createUser_resolver(obj, info, name, lastname, email, password, confirmpassword):
    try:
        create_new_user = {"name": name, "lastname": lastname, "email": email, "password": password, "confirmpassword": confirmpassword}
        new_user= collection.insert_one(create_new_user)
        get_new_user = collection.find_one(create_new_user)
        print(get_new_user)
        return get_new_user
    except Exception as error:  # todo not found
        return error