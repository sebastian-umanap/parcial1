import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListComponent } from './components/vehiculos-list/vehiculos-list.component';

@NgModule({
  declarations: [VehiculosListComponent],
  imports: [CommonModule],
  exports: [VehiculosListComponent] // para usarlo por selector en app.component.html
})
export class VehiculosModule {}
