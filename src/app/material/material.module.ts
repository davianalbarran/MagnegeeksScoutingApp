import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatGridListModule } from '@angular/material'

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule
]
@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
