import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  studentId: string = '';
  year: string = '';
  tel: string = '';
  email: string = '';
  bio: string = '';
  skills: string = '';
  showPassword: boolean = false;

   validate(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value;
    if (email && !email.endsWith('@live.rmutl.ac.th')) {
      return { rmutlEmail: true };
    }
    return null;
  }

  onSubmit() {
    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      studentId: this.studentId,
      year: this.year,
      tel: this.tel,
      bio: this.bio,
      skills: this.skills
    };
    console.log('Form Submitted:', userData);
    // ส่งข้อมูลไป backend ได้ที่นี่
  }
}
