import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormShibeComponent } from './components/form-shibe/form-shibe.component';

const routes: Routes = [
  { path: '', component: FormShibeComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FormShibeRoutingModule {}
