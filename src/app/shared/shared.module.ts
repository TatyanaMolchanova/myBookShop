import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
