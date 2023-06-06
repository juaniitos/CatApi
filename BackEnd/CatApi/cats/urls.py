from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from cats import views

#api versioning
router = routers.DefaultRouter()
router.register(r'cats', views.CatsView, 'cats')
urlpatterns = [
    path("api/", include(router.urls)),
    path('docs/', include_docs_urls(title="Cats API")),
]