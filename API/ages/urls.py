from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from ages import views

urlpatterns =[
    url(r'^age/$',views.AgesList.as_view()),
]

urlpatterns= format_suffix_patterns(urlpatterns)
