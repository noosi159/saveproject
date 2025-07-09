import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { DasktopHomePage1Component } from '../dasktop-home-page1/dasktop-home-page1.component';
import { DasktopHomePage2Component } from '../dasktop-home-page2/dasktop-home-page2.component';
import { DasktopHomePage3Component } from '../dasktop-home-page3/dasktop-home-page3.component';
import { DasktopHomePage4Component } from '../dasktop-home-page4/dasktop-home-page4.component';
import { DasktopHomePage5Component } from '../dasktop-home-page5/dasktop-home-page5.component';
import { DasktopHomePage6Component } from '../dasktop-home-page6/dasktop-home-page6.component';

@Component({
  selector: 'app-dasktop-home',
  imports: [
    SharedModule,
    DasktopHomePage1Component,
    DasktopHomePage2Component,
    DasktopHomePage3Component,
    DasktopHomePage4Component,
    DasktopHomePage5Component,
    DasktopHomePage6Component,
  ],
  templateUrl: './dasktop-home.component.html',
  styleUrl: './dasktop-home.component.scss',
})
export class DasktopHomeComponent {}
