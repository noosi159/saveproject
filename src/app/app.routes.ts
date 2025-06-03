import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';
import { RegisterComponent} from './core/layouts/register/register.component';
import { OtploginComponent } from './core/layouts/otplogin/otplogin.component';
import { ForgotPasswordComponent } from './core/layouts/forgot-password/forgot-password.component';
import { HelpCenterComponent } from './core/layouts/help-center/help-center.component';
import { ContactUsComponent } from './core/layouts/contact-us/contact-us.component';



export const routes: Routes = [
    { path: '', redirectTo: 'help-center', pathMatch: 'full' },
    {path: 'help-center', component: HelpCenterComponent },
    {path: 'sign-in', component: LoginComponent },
    { path: 'sign-up', component: RegisterComponent },
    {path: 'forgot-pass', component: ForgotPasswordComponent },
    {path: 'Login-Otp', component: OtploginComponent },
    {path: 'contact-us', component: ContactUsComponent },
    
];
