from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from genders import views

urlpatterns =[
    url(r'^gender/$',views.GendersList.as_view()),
    url(r'^audio/$',views.prueba1),
    url(r'^prueba/(?P<value>\w+)/$',views.GenderURL, name='name'),


]

urlpatterns= format_suffix_patterns(urlpatterns)
