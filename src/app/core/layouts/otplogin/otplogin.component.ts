import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-otplogin',
  imports: [SharedModule],
  templateUrl: './otplogin.component.html',
  styleUrl: './otplogin.component.scss'
})
export class OtploginComponent {
       otp: any;
}

