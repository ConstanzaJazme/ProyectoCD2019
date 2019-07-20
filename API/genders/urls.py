from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from genders import views

urlpatterns =[
    url(r'^gender/$',views.GendersList.as_view()),
    url(r'^api/v1/$',views.upload_audio.as_view(), name='upload_audio'),
    url(r'^prueba/(?P<value>\w+)/$',views.GenderURL, name='name'),
     # url(r'^audio/ingresar$', views.upload_recording, name='upload_recording'),
     # url(r'^api/v1/$',views.upload_recording),



]

urlpatterns= format_suffix_patterns(urlpatterns)
