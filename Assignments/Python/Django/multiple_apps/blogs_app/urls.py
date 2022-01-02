from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("new/", views.new),
    path("create/", views.create),
    path("<int:val>/", views.show),
    path("<int:val>/edit/", views.edit),
    path("<int:val>/delete/", views.destroy),
    path("json/", views.json)
]