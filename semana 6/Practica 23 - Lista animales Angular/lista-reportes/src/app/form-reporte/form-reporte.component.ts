import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html',
  styleUrls: ['./form-reporte.component.css'],
})
export class FormReporteComponent {
  @Input() reportes:any

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
      this.reportes.push(this.formData)
    } else {
      // Mostrar mensajes de error o realizar acciones adicionales
      console.log('Formulario inválido');
    }
  }
}
