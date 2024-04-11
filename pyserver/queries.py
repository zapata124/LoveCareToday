from ariadne import convert_kwargs_to_snake_case
from db import (collection)

import mailtrap as mt
import random

def getUser_resolver(obj, info, email):
    try:
        current_user= collection.find_one({"email":email})
        # print(obj, info)
        return current_user
    except Exception as error:
        return error

@convert_kwargs_to_snake_case
def start_authentication_resolver(obj, info, email):
    try:
        print(email)
        random_number = random.randrange(10000, 99999)
        update_user_passcode = collection.update_one({ "email": email }, { "$set" : { "password": str(random_number)}})
        # hostname = socket.gethostname()
        # ip_address = socket.gethostbyname(hostname)
        mail = mt.Mail(
        sender=mt.Address(email="mailtrap@demomailtrap.com", name="Mailtrap Test"),
        to=[mt.Address(email=email)],
        subject="You are awesome!",
        text="This is your pass code:" + str(random_number),
        category="Integration Test",
        )
        client = mt.MailtrapClient(token="873201b3c771331914e15cec07a6d65c")
        client.send(mail)

        return { "passcode": "Passcode sent to email" + email}
    except Exception as error:
        return error
@convert_kwargs_to_snake_case
def authenticateUser_resolver(obj, info, email, password):
    try:
        current_user= collection.find_one({"email": email, "password": password})
        print(current_user)
        return current_user
    except Exception as error: 
        return error
    
@convert_kwargs_to_snake_case
def createUser_resolver(obj, info, name, lastname, email, password, confirmpassword):
    try:
        create_new_user = {"name": name, "lastname": lastname, "email": email, "password": password, "confirmpassword": confirmpassword, "avatar": None, "bookmarks": [] }
        new_user= collection.insert_one(create_new_user)
        get_new_user = collection.find_one(create_new_user)
        print(get_new_user)
        return get_new_user
    except Exception as error:
        return error
    
@convert_kwargs_to_snake_case
def add_bookmark(obj, info, email, bookmark, slug):
    try:
        collection.update_one({ "email": email }, { "$push" : { "bookmarks": { "label" : bookmark, "slug": slug}}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error
    
@convert_kwargs_to_snake_case
def add_user_profile_image(obj, info, email, avatar):
    try:
        collection.update_one({ "email": email }, { "$set" : { "avatar": avatar}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error
    
@convert_kwargs_to_snake_case
def delete_bookmark(obj, info, email, bookmark):
    try:
        collection.update_one({ "email": email }, { "$pull" : { "bookmarks": { "label" : bookmark}}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error