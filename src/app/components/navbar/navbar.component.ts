import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links = [
    { label: 'Produtos', url: '/products', authRequired: false },
    { label: 'Sobre', url: '/about', authRequired: false },
    { label: 'Dashboard', url: '/dashboard', authRequired: true },
  ]

  isMenuOpen = false
  isAuthenticated = false

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }
}
