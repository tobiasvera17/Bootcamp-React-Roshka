import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html',
  styleUrls: ['./form-reporte.component.css'],
})
export class FormReporteComponent {
  formData = {
    title: '',
    ultima_vista: '',
    descripcion: '',
    contacto: '',
    pais: '',
    link:'',
    visible: true,
  };

  urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

  today = new Date().toJSON().slice(0, 10);

  ngOnInit() {}
  submitForm(form: NgForm) {
    if (form.valid) {
      // Realizar acciones cuando el formulario es válido
      console.log('Formulario válido');
    } else {
      // Mostrar mensajes de error o realizar acciones adicionales
      console.log('Formulario inválido');
    }
  }
}
