import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';
import { RegisterComponent } from './core/layouts/register/register.component';
import { OtploginComponent } from './core/layouts/otplogin/otplogin.component';
import { ForgotPasswordComponent } from './core/layouts/forgot-password/forgot-password.component';
import { DasktopHomeComponent } from './pages/home/dasktop-home/dasktop-home.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { PortfolioComponent } from './pages/Portfolio/portfolio-page/portfolio-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'helpcenter', pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent },
  { path: 'desktop-home', component: DasktopHomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-pass', component: ForgotPasswordComponent },
  { path: 'login-Otp', component: OtploginComponent },
  { path: 'helpcenter', component: HelpCenterComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
