import { Routes } from '@angular/router';
import { LoginComponent } from './core/layouts/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    {path: 'sign-in', component: LoginComponent }
];
