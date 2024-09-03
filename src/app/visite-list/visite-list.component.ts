import { Component } from '@angular/core';
import { VisiteService } from '../visite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visite-list',
  templateUrl: './visite-list.component.html',
  standalone: true,
  styleUrls: ['./visite-list.component.css'],
  imports: [CommonModule]
})
export class VisiteListComponent {
  visites: any[] = [];

  constructor(private visiteService: VisiteService) {
    this.loadVisites();
  }

  loadVisites() {
    this.visiteService.getVisites().subscribe((data: any) => {
      this.visites = data;
    });
  }
}
