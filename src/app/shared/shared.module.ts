import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';  
import { IftaLabelModule } from 'primeng/iftalabel';


@NgModule({
  declarations: [],
  providers: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    IftaLabelModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    CommonModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    IftaLabelModule,
  ]
})
export class SharedModule { }
