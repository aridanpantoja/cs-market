import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CharmProps } from '../models/charm'
import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cart'

  private cartItemsSubject: BehaviorSubject<CharmProps[]> = new BehaviorSubject<
    CharmProps[]
  >(this.getCartItems())

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  getCartItems$() {
    return this.cartItemsSubject.asObservable()
  }

  private getCartItems(): CharmProps[] {
    if (isPlatformBrowser(this.platformId)) {
      const items = localStorage.getItem(this.storageKey)
      return items ? JSON.parse(items) : []
    }
    return []
  }

  addItemToCart(item: CharmProps): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentItems = this.getCartItems()
      const existingItemIndex = currentItems.findIndex(
        (cartItem) => cartItem.id === item.id,
      )

      if (existingItemIndex !== -1) {
        currentItems[existingItemIndex].quantity += item.quantity
      } else {
        currentItems.push(item)
      }

      localStorage.setItem(this.storageKey, JSON.stringify(currentItems))
      this.cartItemsSubject.next(currentItems) // Emite os novos itens
    }
  }

  removeItemFromCart(itemId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentItems = this.getCartItems()
      const updatedItems = currentItems.filter((item) => item.id !== itemId)

      localStorage.setItem(this.storageKey, JSON.stringify(updatedItems))
      this.cartItemsSubject.next(updatedItems)
    }
  }
}
