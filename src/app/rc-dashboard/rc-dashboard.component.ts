import { Component } from '@angular/core';
import { VisiteService } from '../visite.service';
import { CommonModule } from '@angular/common';  // Ajout de CommonModule pour *ngFor, *ngIf
import { FormsModule } from '@angular/forms';    // Ajout de FormsModule pour ngModel

@Component({
  selector: 'app-rc-dashboard',
  templateUrl: './rc-dashboard.component.html',
  standalone: true,
  styleUrls: ['./rc-dashboard.component.css'],
  imports: [CommonModule, FormsModule]  // Ajout des modules nécessaires
})
export class RcDashboardComponent {
  visite: any = {
    startDate: '',
    endDate: '',
    address: '',
    object: ''
  };

  constructor(private visiteService: VisiteService) {}

  onSubmit() {
    this.visiteService.createVisite(this.visite).subscribe((data: any) => {
      alert('Visite planifiée avec succès!');
    });
  }
}
