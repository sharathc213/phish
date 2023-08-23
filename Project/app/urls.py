from . import views
from django.contrib import admin
from django.urls import path,include



urlpatterns = [
   
    path('',views.One,name='One'),
    path('Two',views.Two,name='Two'),
    path('Three',views.Three,name='Three'),
    path('Four',views.Four,name='Four'),
    path('loadFour',views.loadFour,name='loadFour'),
    path('Five',views.Five,name='Five'),
    path('Six',views.Six,name='Six'),
    path('FiveE',views.FiveE,name='FiveE'),
    path('Fiveend',views.Fiveend,name='Fiveend'),
    # path('Dashboard',views.Dashboard,name='Dashboard'),
    # path('Dashboard/<str:page>/',views.Dashboard,name='Dashboard'),
    # path('get_categories',views.get_categories,name='get_categories'),
    # path('feedback_form',views.feedback_form,name='feedback_form'),
    # path('description_data',views.description_data,name='description_data'),
    # path('get_item',views.get_item,name='get_item'),

   
    
]