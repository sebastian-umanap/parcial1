import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../../../core/services/vehiculos.service';
import { Vehiculo } from '../../../../core/models/vehiculo.model';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.scss']
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  isLoading = true;
  error = '';

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => { this.vehiculos = data; this.isLoading = false; },
      error: () => { this.error = 'No se pudieron cargar los vehículos.'; this.isLoading = false; }
    });
  }
}
