import { CommonModule, formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './Busqueda.component.html',
  styleUrl: './Busqueda.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusquedaComponent {
  public fecha: string = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString();

  public consultaForm = new FormGroup({
    fechaBusqueda: new FormControl(this.fecha),
  });

  close(event: boolean) {}

  onSubmit() {}

  onLimpiar() {}

  onNuevo() {}
}
