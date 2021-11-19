import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';

@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
