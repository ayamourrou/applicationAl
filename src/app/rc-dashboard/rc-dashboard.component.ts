import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

interface Visite {
  dateDebut: string;
  dateFin: string;
  adresse: string;
  objet: string;
}

@Component({
  selector: 'app-rc-dashboard',
  templateUrl: './rc-dashboard.component.html',
  styleUrls: ['./rc-dashboard.component.css'],
  imports: [
    FormsModule,
    NgForOf,
    RouterLink
  ],
  standalone: true
})
export class RcDashboardComponent implements OnInit {
  visite: Visite = {
    dateDebut: '',
    dateFin: '',
    adresse: '',
    objet: ''
  };
  visites: Visite[] = [];

  constructor() { }

  ngOnInit(): void {
    this.chargerVisites();
  }

  soumettreVisite(): void {
    // Ajoute la nouvelle visite à la liste locale
    this.visites.push({ ...this.visite });
    this.reinitialiserFormulaire();
  }

  chargerVisites(): void {
    // Remplacer par des données statiques pour test
    this.visites = [
      { dateDebut: '2024-09-01', dateFin: '2024-09-02', adresse: '123 Rue Exemple', objet: 'Réunion' },
      { dateDebut: '2024-09-03', dateFin: '2024-09-04', adresse: '456 Avenue Exemple', objet: 'Formation' }
    ];
  }

  reinitialiserFormulaire(): void {
    this.visite = {
      dateDebut: '',
      dateFin: '',
      adresse: '',
      objet: ''
    };
  }
}
