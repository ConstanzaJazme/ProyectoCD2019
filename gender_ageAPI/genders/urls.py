from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from genders import views

urlpatterns =[
    url(r'^gender/$',views.GendersList.as_view()),
]

urlpatterns= format_suffix_patterns(urlpatterns)
