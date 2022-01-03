from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.index),
    path('new_author', views.new_author),
    path("new_book", views.new_book),
    path("view_author/<int:id>", views.view_author),
    path("view_book/<int:id>", views.view_book),
    path("process_author", views.process_author),
    path("process_book", views.process_book),
    path("author_book/<int:id>", views.author_book),
    path("book_author/<int:id>", views.book_author),
    path("delete_author/<int:id>", views.delete_author)
]