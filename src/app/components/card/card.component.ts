import { Component, Input, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { CharmProps } from '../../models/charm'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() charm: CharmProps | null = null
  color: string = ''

  constructor(
    private apiService: ApiService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.apiService.getRarities().subscribe((data) => {
      const color = data.find((item) => item.name === this.charm?.rarity)
      this.color = color ? color.color : 'ea580c'
    })
  }

  addOnCart(): void {
    if (this.charm) {
      this.cartService.addItemToCart(this.charm)
    }
  }
}
