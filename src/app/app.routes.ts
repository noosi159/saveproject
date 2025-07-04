
import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';
import { RegisterComponent } from './core/layouts/register/register.component';
import { OtploginComponent } from './core/layouts/otplogin/otplogin.component';
import { ForgotPasswordComponent } from './core/layouts/forgot-password/forgot-password.component';
import{ ContactUsComponent } from './pages/contact-us/contact-us.component';
//import { DasktopHomeComponent } from './pages/desktop-home/desktop-home.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
//import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component'; 
import { ImportPortComponent } from './pages/import-port/import-port.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'import-port', component: ImportPortComponent },
  { path: 'about-us', component: AboutUsComponent },  
  { path: 'contact', component: ContactUsComponent },
 // { path: 'desktop-home', component: DasktopHomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-pass', component: ForgotPasswordComponent },
  { path: 'login-Otp', component: OtploginComponent },
  { path: 'helpcenter', component: HelpCenterComponent },
 // { path: 'portfolio', component: PortfolioComponent },

];
