from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from .models import *


class ChildViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Child.objects.all()
    serializer_class = ChildSerializer

    def list(self, request):
        queryset = Child.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    




class VillageViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Village.objects.all()
    serializer_class = VillageSerializer

    def list(self, request):
        queryset = Village.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    


class TalukaViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Taluka.objects.all()
    serializer_class = TalukaSerializer

    def list(self, request):
        queryset = Taluka.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    
class DistrictViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = District.objects.all()
    serializer_class = DistrictSerializer
    
    def list(self, request):
        queryset = District.objects.all()
        serializer = self.serializer_class(queryset , many=True)
        return Response(serializer.data)
    


class StateViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = State.objects.all()
    serializer_class = StateSerializer

    def list(self, request):
        queryset = State.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    



class PeopleViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = People.objects.all()
    serializer_class = PeopleSerializer

    def list(self, request):
        queryset = People.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)



    def update(self, request, pk=None):
        people = self.queryset.get(pk=pk)
        serializer = self.serializer_class(people,data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors, status=400)
        
    def destroy(self, request, pk=None):
        try:
            people = self.queryset.get(pk=pk)
            people.delete()
            return Response(status=204)
        except People.DoesNotExist:
            return Response(status=404)
 