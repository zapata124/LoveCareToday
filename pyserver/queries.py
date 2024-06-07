from ariadne import convert_kwargs_to_snake_case
from db import (collection)
import os
import mailtrap as mt
import random
from datetime import date

#### we can possibly add a create a union or a interface for some of this functions

def getUser_resolver(obj, info, email):
    try:
        current_user= collection.find_one({"email":email})
        return current_user
    except Exception as error:
        return error


def start_authentication_resolver(obj, info, email):
    try:
        print(email)
        current_date = date.today()
        print(current_date)
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
        client = mt.MailtrapClient(token=os.environ.get('MAIL_TOKE'))
        client.send(mail)
        success_full_update= update_user_passcode.matched_count > 0
        # for record in cursor:
        #     print(record)
        
        print('success!!', success_full_update)

        return { "passcode": success_full_update if email else None  }
    except Exception as error:
        return error
    

def authenticateUser_resolver(obj, info, email, password):
    try:
        current_user= collection.find_one({"email": email, "password": password})
        print(current_user)
        return current_user
    except Exception as error: 
        return error
    
def terminateUser_authentication(obj, info, email):
    try:
        print(email, '############')
        current_user= collection.update_one({ "email": email }, { "$set" : { "password": None }})
        print(current_user, email)
        # need to validate that the user was found 
        return { "status": 'User successfully logged off' }
    except Exception as error:
        return error
    
def createUser_resolver(obj, info, name, lastname, email, password, confirmpassword):
    try:
        create_new_user = {"name": name, "lastname": lastname, "email": email, "password": password, "confirmpassword": confirmpassword, "avatar": None, "created": str(date.today()), "bookmarks": [] }
        new_user= collection.insert_one(create_new_user)
        get_new_user = collection.find_one(create_new_user)
        print(get_new_user)
        return get_new_user
    except Exception as error:
        return error
    

def add_bookmark(obj, info, email, bookmark, slug):
    try:
        collection.update_one({ "email": email }, { "$push" : { "bookmarks": { "label" : bookmark, "slug": slug}}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error
    

def add_user_profile_image(obj, info, email, avatar):
    try:
        collection.update_one({ "email": email }, { "$set" : { "avatar": avatar}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error
    

def delete_bookmark(obj, info, email, bookmark):
    try:
        collection.update_one({ "email": email }, { "$pull" : { "bookmarks": { "label" : bookmark}}})
        updated_user= collection.find_one({"email": email })
        return updated_user
    except Exception as error:
        return error