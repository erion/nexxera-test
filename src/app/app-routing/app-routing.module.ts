import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiliaisComponent } from '../filial/filiais.component';
import { FilialFormComponent } from '../filial/filial-form/filial-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'filiais', component: FiliaisComponent },
  { path: 'filial', component: FilialFormComponent },
  { path: 'filial/:id', component: FilialFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
