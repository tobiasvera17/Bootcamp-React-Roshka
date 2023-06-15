import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() reporte: any;
  sayMessage = () => {
    alert("Va a salir de la aplicación")
  }
}
