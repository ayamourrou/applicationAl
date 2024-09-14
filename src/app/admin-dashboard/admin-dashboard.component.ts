import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalUtilisateurs = 150; // Exemple de données statiques
  reservationsAujourdhui = 20;
  tachesEnAttente = 5;

  utilisateurs = [
    { nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@example.com', role: 'Utilisateur' },
    { nom: 'Martin', prenom: 'Marie', email: 'marie.martin@example.com', role: 'Administrateur' },
    { nom: 'Durand', prenom: 'Paul', email: 'paul.durand@example.com', role: 'Utilisateur' }
  ];

  constructor() {}

  ngOnInit(): void {}

  editUtilisateur(utilisateur: any) {
    console.log('Modification de l\'utilisateur :', utilisateur);
    // Logique de modification
  }

  deleteUtilisateur(utilisateur: any) {
    console.log('Suppression de l\'utilisateur :', utilisateur);
    // Logique de suppression
  }
}
