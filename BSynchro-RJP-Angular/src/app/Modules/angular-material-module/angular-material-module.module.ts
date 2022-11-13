import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
  ],
  exports: [
    MatIconModule,
    MatDividerModule,
    MatCardModule,
  ]
})
export class AngularMaterialModuleModule { }
