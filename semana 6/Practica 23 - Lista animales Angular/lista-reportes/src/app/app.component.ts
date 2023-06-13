import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reportes = [
    {
      title: 'PERRO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'caniche acostado',
      contacto: '123123123',
      pais: 'Paraguay',
      link: 'www.youtube.com',
      visible: false
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Enrique Medina',
      contacto: '123123123',
      pais: 'Perú',
      link: 'www.google.com',
      visible:true
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Enrique Medina',
      contacto: '123123123',
      pais: 'Perú',
      link: 'www.google.com',
      visible:false
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Achu Ramírez',
      contacto: '123123123',
      pais: 'Bolivia',
      link: 'www.google.com',
      visible: true
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Achu Ramírez',
      contacto: '123123123',
      pais: 'Bolivia',
      link: 'www.google.com',
      visible: false
    },
    {
      title: 'PERRO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'caniche acostado',
      contacto: '123123123',
      pais: 'Paraguay',
      link: 'www.youtube.com',
      visible: true
    },
  ];
}
