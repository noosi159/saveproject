
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from "../nav-bar/nav-bar.component";

@Component({
   selector: 'app-help-center',
  imports: [SharedModule, FooterComponent, NavComponent],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {

}
