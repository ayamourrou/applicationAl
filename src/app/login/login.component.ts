import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Logique d'authentification basique
    if (this.username === 'rc') {
      this.router.navigate(['/rc-dashboard']);
    } else if (this.username === 'client') {
      this.router.navigate(['/client-dashboard']);
    } else if (this.username === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  login() {

  }
}
