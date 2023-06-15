from django.contrib import admin
from app.models import Pizza, Ingrediente


# Register your models here.
@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'activo')


@admin.register(Ingrediente)
class IngredienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria')
