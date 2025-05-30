import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
};
  

