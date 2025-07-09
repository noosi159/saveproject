
import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';
import { RegisterComponent } from './core/layouts/register/register.component';
import { OtploginComponent } from './core/layouts/otplogin/otplogin.component';
import { ForgotPasswordComponent } from './core/layouts/forgot-password/forgot-password.component';
import{ ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DasktopHomeComponent } from './pages/home/dasktop-home/dasktop-home.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { PortfolioComponent } from './pages/Portfolio/portfolio-page/portfolio-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component'; 
import { ImportPortComponent } from './pages/import-port/import-port.component';
import {DetailPortComponent} from './core/layouts/detail-port/detail-port.component';
export const routes: Routes = [
  { path: '', redirectTo: 'desktop-home', pathMatch: 'full' },
  { path: 'detail-port', component: DetailPortComponent },
  { path: 'import-port', component: ImportPortComponent },
  { path: 'about-us', component: AboutUsComponent },  
  { path: 'contact', component: ContactUsComponent },
  { path: 'desktop-home', component: DasktopHomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-pass', component: ForgotPasswordComponent },
  { path: 'login-Otp', component: OtploginComponent },
  { path: 'helpcenter', component: HelpCenterComponent },
 { path: 'portfolio', component: PortfolioComponent },

];
