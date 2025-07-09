import { Component } from '@angular/core';
import { PortfolioPage1Component } from '../portfolio-page1/portfolio-page1.component';
import { PortfolioPage2Component } from '../portfolio-page2/portfolio-page2.component';
import { PortfolioPage3Component } from '../portfolio-page3/portfolio-page3.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    SharedModule,
    PortfolioPage1Component,
    PortfolioPage2Component,
    PortfolioPage3Component,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioComponent {}
