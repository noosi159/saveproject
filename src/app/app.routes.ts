import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';
import { RegisterComponent } from './core/layouts/register/register.component';
import { OtploginComponent } from './core/layouts/otplogin/otplogin.component';
import { ForgotPasswordComponent } from './core/layouts/forgot-password/forgot-password.component';
import { DasktopHomeComponent } from './pages/home/dasktop-home/dasktop-home.component';
import { HelpCenterComponent } from './core/layouts/help-center/help-center.component';
import { PortfolioComponent } from './pages/Portfolio/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Portfolio', pathMatch: 'full' },
  { path: 'desktop-home', component: DasktopHomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-pass', component: ForgotPasswordComponent },
  { path: 'Login-Otp', component: OtploginComponent },
  { path: 'Helpcenter', component: HelpCenterComponent },
  { path: 'Portfolio', component: PortfolioComponent },
];
