import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from "../nav-bar/nav-bar.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [SharedModule, FooterComponent, NavComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
 contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // TODO: ส่งข้อมูลไปยัง backend หรือ API ที่คุณกำหนด
    } else {
      this.contactForm.markAllAsTouched(); // ช่วยแสดง error ถ้าฟอร์มไม่ valid
    }
  }
}
