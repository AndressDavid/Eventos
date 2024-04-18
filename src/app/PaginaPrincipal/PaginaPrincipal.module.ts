import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './PaginaPrincipal.component';
import { TablaEventosComponent } from './Componentes/Tabla-Eventos/Tabla-Eventos.component';
import { BusquedaComponent } from './Componentes/Busqueda/Busqueda.component';
import { EventoService } from './Componentes/Tabla-Eventos/service/evento.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginaPrincipalComponent],
  exports: [PaginaPrincipalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    PaginatorModule,
    SelectButtonModule,
    ScrollerModule,
    TableModule,
    TooltipModule,
    TriStateCheckboxModule,
    RippleModule,
    BusquedaComponent,
    TablaEventosComponent,
  ],

  providers: [EventoService],
})
export class PaginaPrincipalModule {}
