import { Component, OnInit } from '@angular/core';
import { VisiteService } from '../visite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  visites: any[] = [];

  constructor(private visiteService: VisiteService) {}

  ngOnInit(): void {
    this.visiteService.getVisites().subscribe(data => {
      this.visites = data;
    });
  }

  reserverHotel(visite: any) {
    // Logique pour réserver un hôtel
    alert(`Réservation d'hôtel pour la visite à ${visite.address}`);
  }
}
