import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.carregarDoStorage();
  }

  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
