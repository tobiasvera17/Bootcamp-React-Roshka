import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FormReporteComponent } from './form-reporte/form-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InfoCardComponent,
    FormReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
