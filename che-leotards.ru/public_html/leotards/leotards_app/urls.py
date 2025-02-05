from django.urls import path
from . import views

app_name = 'leotards_app'
handler404 = 'leotards_app.views.handler404'

urlpatterns = [
  path('', views.index, name='index'),
  path('conditions/', views.conditions, name='conditions'),
  path('contact/', views.contact, name='contact'),
  path('gallery/<str:sport>/', views.gallery, name='gallery'),
  path('sale/', views.sale, name='sale'),
]