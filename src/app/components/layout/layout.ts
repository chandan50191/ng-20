import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  user?: string = '';

ngOnInit(): void {
  const username = localStorage.getItem('user');
  this.user = username ? username : ''
}
  router = inject(Router);
  onLogout () {
    this.router.navigateByUrl('login')
    localStorage.removeItem('user')
  }
}
