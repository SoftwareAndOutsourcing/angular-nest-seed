import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatsComponent } from './cats.component';

const routes: Routes = [
  { path: 'cats', component: CatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
