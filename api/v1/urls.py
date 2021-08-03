# -*- coding: utf-8 -*-
# import the necessary packages

from django.urls import include, path, re_path
from api.v1 import views

urlpatterns = [
        re_path(r'^v1/encode/$', views.QrCodeEncode.as_view()),
        re_path(r'^v1/decode/$', views.QrCodeDecode.as_view()),
    ]

