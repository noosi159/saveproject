import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-nav-bar',
  imports: [SharedModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavComponent {
  isMenuOpen = false;
  isUserMenuOpen = false;
}
