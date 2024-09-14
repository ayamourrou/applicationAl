import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent {
  visit = {
    dateDebut: '',
    dateFin: '',
    adresse: '',
    objet: '',
    services: {
      cafePause: false,
      petitDejeuner: false,
      Dejeuner: false,
      visitesMonuments: false,
      afterwork: false
    }
  };

  submitVisit() {
    // Logique pour envoyer les données de visite à RcDashboardComponent
    console.log('Visite annoncée :', this.visit);
  }
}
