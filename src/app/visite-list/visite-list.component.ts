import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";

export interface Visite {
  dateDebut: string;
  dateFin: string;
  adresse: string;
  objet: string;
  client: {
    nom: string;
    prenom: string;
  };
}


@Component({
  selector: 'app-visite-list',
  templateUrl: './visite-list.component.html',
  styleUrls: ['./visite-list.component.css'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class VisiteListComponent implements OnInit {
  visites: Visite[] = [];

  constructor() { }

  ngOnInit(): void {
    this.chargerVisites();
  }
  chargerVisites(): void {
    // Remplace ces données par un appel à un service pour récupérer les visites depuis un back-end
    this.visites = [
      {
        dateDebut: '2024-09-01',
        dateFin: '2024-09-02',
        adresse: 'Paris',
        objet: 'Réunion',
        client: {
          nom: 'Ayoub',
          prenom: 'BENNANI'
        }
      },
      {
        dateDebut: '2024-09-03',
        dateFin: '2024-09-04',
        adresse: 'RABAT',
        objet: 'Formation',
        client: {
          nom: 'Martin',
          prenom: 'Claire'
        }
      }
    ];
  }
}
