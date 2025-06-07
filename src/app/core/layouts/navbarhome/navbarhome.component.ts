import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-navbarhome',
  imports: [  SharedModule], 
  templateUrl: './navbarhome.component.html',
  styleUrl: './navbarhome.component.scss'
})
export class NavbarhomeComponent {
 isMenuOpen = false;
  isUserMenuOpen = false;
}
