import { Component } from '@angular/core';
import { VisiteService } from '../visite.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  standalone: true,
  styleUrls: ['./client-dashboard.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ClientDashboardComponent {
  visite: any = {
    startDate: '',
    endDate: '',
    address: '',
    object: '',
    rc: ''
  };

  rcList = ['RC1', 'RC2', 'RC3'];  // Exemple de liste de RC

  constructor(private visiteService: VisiteService) {}

  onSubmit() {
    this.visiteService.createVisite(this.visite).subscribe((data: any) => {
      alert('Visite réservée avec succès!');
    });
  }
}
