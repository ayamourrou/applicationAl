import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RcDashboardComponent } from './rc-dashboard/rc-dashboard.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { SettingsComponent } from './settings/settings.component';
import { VisiteListComponent } from './visite-list/visite-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdminDashboardComponent,
    ClientDashboardComponent,
    RcDashboardComponent,
    ReservationFormComponent,
    SettingsComponent,
    VisiteListComponent,
    HttpClientModule,
    AppComponent,
    FormsModule,
    // Ajoutez ici les autres modules nécessaires
  ],
  bootstrap: []
})
export class AppModule { }
