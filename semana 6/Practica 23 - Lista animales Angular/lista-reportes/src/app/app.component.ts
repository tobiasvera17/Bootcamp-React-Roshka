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
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux',
      visible: false
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Enrique Medina',
      contacto: '123123123',
      pais: 'Perú',
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux',
      visible:true
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Enrique Medina',
      contacto: '123123123',
      pais: 'Perú',
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux' ,
      visible:false
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Achu Ramírez',
      contacto: '123123123',
      pais: 'Bolivia',
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux' ,
      visible: true
    },
    {
      title: 'LORO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'Achu Ramírez',
      contacto: '123123123',
      pais: 'Bolivia',
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux' ,
      visible: false
    },
    {
      title: 'PERRO PERDIDO',
      ultima_vista: '01-02-2021',
      descripcion: 'caniche acostado',
      contacto: '123123123',
      pais: 'Paraguay',
      link: 'https://www.youtube.com/watch?v=5e7nLXWq1Ho&ab_channel=Znorux',
      visible: true
    },
  ];

  sayMessage = () => {
    alert("Va a salir de la aplicación")
  }
}
