from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("shows", views.shows),
    path("new_show", views.new_show),
    path("process_new_show", views.process_new_show),
    path("view_show/<int:id>", views.view_show),
    path("edit_show/<int:id>", views.edit_show),
    path("delete_show/<int:id>", views.delete_show),
    path("edit_show_process/<int:id>", views.edit_show_process)
]