import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register/register.component';
import { PaymentComponent } from './shared/components/payment/payment.component';

/**
 * @author: Shoukath Mohammed
 */

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/payment',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'payment',
        component: PaymentComponent
    }
];


