import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { EventoService } from './service/evento.service';
import { Evento } from './interfaces/evento';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tabla-eventos',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
  ],
  templateUrl: './Tabla-Eventos.component.html',
  providers: [MessageService],
})
export class TablaEventosComponent implements OnInit {
  eventos!: Evento[];

  statuses!: SelectItem[];

  clonedEvento: { [s: string]: Evento } = {};

  constructor(
    private eventoService: EventoService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.eventoService.getProductsMini().then((data) => {
      this.eventos = data;
    });

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' },
    ];
  }

  onRowEditInit(evento: Evento) {
    this.clonedEvento[evento.id as string] = { ...evento };
  }

  onRowEditSave(evento: Evento) {
    if (evento.price > 0) {
      delete this.clonedEvento[evento.id as string];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product is updated',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Price',
      });
    }
  }

  onRowEditCancel(evento: Evento, index: number) {
    this.eventos[index] = this.clonedEvento[evento.id as string];
    delete this.clonedEvento[evento.id as string];
  }
}
