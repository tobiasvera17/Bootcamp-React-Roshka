from django.shortcuts import render
from app.models import Pizza, Ingrediente


# Create your views here.
def prueba_view(request):
    pizzas = Pizza.objects.all()
    ingredientes = Ingrediente.objects.all()

    context = {
        'nombre':'tobi',
        'pizzas': pizzas,
        'ingredientes': ingredientes,
    }
    return render(request, 'listar.html', context)
