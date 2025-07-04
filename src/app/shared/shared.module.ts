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
import { InputOtpModule } from 'primeng/inputotp';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { NavComponent } from '../core/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from '../core/layouts/footer/footer.component';
import { NavbarhomeComponent } from '../core/layouts/navbarhome/navbarhome.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



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
    InputOtpModule,
    MessageModule,
    MessagesModule,
    NavComponent,
    FooterComponent,
    NavbarhomeComponent,
    IconFieldModule,
    InputIconModule,
    NgxExtendedPdfViewerModule

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
    InputOtpModule,
    MessageModule,
    MessagesModule,
    NavComponent,
    FooterComponent,
    NavbarhomeComponent,
    IconFieldModule,
    InputIconModule,
    NgxExtendedPdfViewerModule
  ]
})
export class SharedModule { }
