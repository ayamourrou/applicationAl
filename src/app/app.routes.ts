import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RcDashboardComponent } from './rc-dashboard/rc-dashboard.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { SettingsComponent } from './settings/settings.component';
import { VisiteListComponent } from './visite-list/visite-list.component';
import { MoyensGenerauxComponent } from './moyens-generaux/moyens-generaux.component';

export const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rc-dashboard', component: RcDashboardComponent },
  { path: 'reservation-form', component: ReservationFormComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'visite-list', component: VisiteListComponent },
  { path: 'moyens-generaux', component: MoyensGenerauxComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
