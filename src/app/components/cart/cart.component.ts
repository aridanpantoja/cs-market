import { CommonModule } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import {
  LucideAngularModule,
  Minus,
  Plus,
  ShoppingBag,
  Trash,
  X,
} from 'lucide-angular'
import { CharmProps } from '../../models/charm'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  readonly ShoppingBag = ShoppingBag
  readonly X = X
  readonly Minus = Minus
  readonly Plus = Plus
  readonly Trash = Trash

  items: CharmProps[] = []

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems$().subscribe((items) => {
      this.items = items
    })
  }

  @ViewChild('modal') dialogRef!: ElementRef<HTMLDialogElement>

  open() {
    this.dialogRef.nativeElement.showModal()
  }

  close() {
    this.dialogRef.nativeElement.close()
  }

  // Método para remover um item do carrinho
  removeFromCart(itemId: string): void {
    this.cartService.removeItemFromCart(itemId)
  }
}
