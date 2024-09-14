import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  // Objet pour stocker les informations de réservation
  reservation = {
    clientNom: '',
    clientPrenom: '',
    hotel: '',
    dateDebut: '',
    dateFin: '',
    adresse: ''
  };

  // Liste pour stocker les réservations
  reservations: any[] = [];

  // Fonction pour soumettre le formulaire de réservation
  onSubmit() {
    if (this.reservation.clientNom && this.reservation.clientPrenom && this.reservation.hotel &&
      this.reservation.dateDebut && this.reservation.dateFin && this.reservation.adresse) {

      // Ajouter la réservation à la liste des réservations
      this.reservations.push({ ...this.reservation });

      // Réinitialiser le formulaire
      this.resetForm();

      console.log('Réservation effectuée avec succès !');
      console.log(this.reservations); // Afficher la liste des réservations dans la console
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
  }

  // Réinitialiser le formulaire après la soumission
  resetForm() {
    this.reservation = {
      clientNom: '',
      clientPrenom: '',
      hotel: '',
      dateDebut: '',
      dateFin: '',
      adresse: ''
    };
  }

  // Voir la liste des réservations
  getReservations() {
    return this.reservations;
  }
}
