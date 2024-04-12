from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary import CloudinaryImage
import cloudinary.uploader
import cloudinary.api

import json
from PIL import Image
from io import BytesIO

# new_image = Image.open()
new_image = Image.open('pyserver\images\Sunflower_from_Silesia2.jpg')
buf = BytesIO()
new_image.save(buf, 'jpeg')
buf.seek(0)
config = cloudinary.config(secure=True)

def uploadImage(src):

    try:
         # Upload the image and get its URL
        # =============================
        print('***************************************')
        # Upload the image.
        # Set the asset's public ID and allow overwriting the asset with new versions
        upload = cloudinary.uploader.upload(src)

        # Build the URL for the image and save it in the variable 'srcURL'
        #   srcURL = CloudinaryImage("quickstart_butterfly").build_url()

        # Log the image URL to the console. 
        # Copy this URL in a browser tab to generate the image on the fly.
        #   print("****2. Upload an image****\nDelivery URL: ", srcURL, "\n")
        print('success', upload)
    except Exception as error:
        return error
