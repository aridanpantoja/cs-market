import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links = [
    { label: 'Produtos', url: '/products' },
    { label: 'Sobre', url: '/about' },
    { label: 'Dashboard', url: '/dashboard' },
  ]

  isMenuOpen = false

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }
}
