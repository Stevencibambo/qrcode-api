# import the necessary packages

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework import status
from datetime import datetime
from PIL import Image 
import numpy as np
import pyqrcode
import base64
import cv2
import io

# @author -Steven Cib.


@api_view(['POST'])
def encode(request):
    data = JSONParser().parse(request)
    if len(data['content']) <= 0:
        return Response(request, status=status.HTTP_400_BAD_REQUEST)

    if data['useLogo'] == 1:
        if len(data['logo']) <= 0:
            return Response(request, status=status.HTTP_400_BAD_REQUEST)

    qrcode = pyqrcode.create(data['content'])
    img_as_str = qrcode.png_as_base64_str(scale=10)

    response_object = {
            "status": "success",
            "created_date": datetime.now(),
            "data": img_as_str,
        }
    return Response(response_object, status=status.HTTP_200_OK)


@api_view(['POST'])
def decode(request):
    data = JSONParser().parse(request)

    if len(data['data']) <= 0:
        return Response(request, status=status.HTTP_400_BAD_REQUEST)
    img_as_str = data['data']
    img = base64.b64decode(img_as_str)
    img = Image.open(io.BytesIO(img))
    img = img.resize((75, 75), Image.ANTIALIAS)
    qrcode_array = np.asarray(img, dtype="uint8")

    detector = cv2.QRCodeDetector()
    data, vertices_array, _ = detector.detectAndDecode(qrcode_array)
    print(data, vertices_array, _)
    #check if there is a QRCode in the image

    if vertices_array is not None:
        if data:
            response_object = {
                "status": "success",
                "created_date": datetime.now(),
                "data": data
                }
            return Response(response_object, status=status.HTTP_200_OK)
        else:
            return Response(request, status=status.HTTP_400_BAD_REQUEST)
    else:
        response_object = {
            "status": "fail",
            "created_date": datetime.now(),
            "data": "No QR Code in the providing image"
            }
        return Response(response_object, status=status.HTTP_404_NOT_FOUND)
        
        