import { FormShibeRoutingModule } from './form-shibe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormShibeComponent } from './components/form-shibe/form-shibe.component';


@NgModule({
  declarations: [
    FormShibeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormShibeRoutingModule
  ]
})
export class FormShibeModule { }
