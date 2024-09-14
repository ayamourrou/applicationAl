import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
interface Reservation {
  clientNom: string;
  hotel: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
}

@Component({
  selector: 'app-moyens-generaux',
  templateUrl: './moyens-generaux.component.html',
  styleUrls: ['./moyens-generaux.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class MoyensGenerauxComponent {
  reservations: Reservation[] = [];
  nouvelleReservation: Reservation = {
    clientNom: '',
    hotel: '',
    dateDebut: '',
    dateFin: '',
    statut: 'En attente'
  };

  ajouterReservation() {
    this.reservations.push({ ...this.nouvelleReservation });
    this.nouvelleReservation = { clientNom: '', hotel: '', dateDebut: '', dateFin: '', statut: 'En attente' };
  }

  modifierReservation(index: number, statut: string) {
    this.reservations[index].statut = statut;
  }

  supprimerReservation(index: number) {
    this.reservations.splice(index, 1);
  }
}
