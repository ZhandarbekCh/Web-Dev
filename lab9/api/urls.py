from django.contrib import admin
from django.urls import path
from . import views
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.get_company_by_id),
    path('companies/<int:company_id>/vacancies', views.get_vacancy_by_company),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.get_vacancy_by_id),
    path('vacancies/top_ten/', views.get_top_ten)
]