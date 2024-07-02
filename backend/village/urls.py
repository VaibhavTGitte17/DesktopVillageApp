from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()  
router.register('child', ChildViewset, basename='child')
router.register('village', VillageViewset , basename='village')
router.register('taluka', TalukaViewset , basename='taluka')
router.register('district', DistrictViewset, basename='district')
router.register('state', StateViewset, basename='state')
router.register('people',PeopleViewset , basename='people')
urlpatterns = router.urls