import { Component } from '@angular/core';
import { VisiteService } from '../visite.service';
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
  reservation: any = {
    hotelName: '',
    checkIn: '',
    checkOut: ''
  };

  constructor(private visiteService: VisiteService) {}

  onSubmit() {
    // Logique pour enregistrer la réservation
    // Ici, tu peux envoyer la réservation au backend ou lier à une visite spécifique
    alert(`Réservation faite pour l'hôtel ${this.reservation.hotelName}`);
  }
}
