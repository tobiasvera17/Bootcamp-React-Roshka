from django.db import models


# Create your models here.
class Pizza(models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.IntegerField()
    activo = models.BooleanField()


class Ingrediente(models.Model):
    nombre = models.CharField(max_length=200)
    categoria = models.CharField(max_length=200)
