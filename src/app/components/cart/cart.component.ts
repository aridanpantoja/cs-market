import { CommonModule } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { LucideAngularModule, ShoppingBag, X } from 'lucide-angular'
import { ItemType } from '../../models/item'

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

  items: ItemType[] = [
      {
        "markethashname": "Charm | Backsplash",
        "slug": "charm-backsplash",
        "color": "4b69ff",
        "bordercolor": "00a000",
        "pricelatest": 0.26,
        "itemgroup": "charm",
        "itemtype": null,
        "itemname": "backsplash",
        "rarity": "High Grade",
        "itemimage": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXI5BVcJos7pwgSW0nRV-uj6J6cWF5LMhRZibekKFYw7OfBfTgMtdq1kYKIxaGjN-PTxWkF7ZB13L6Z9t-tjgPh8hc6MW36J9TGIwI5ZEaQpAYS66Di9g"
      },
  ]

  ngOnInit(): void {
    //
  }

  @ViewChild('modal') dialogRef!: ElementRef<HTMLDialogElement>

  open() {
    this.dialogRef.nativeElement.showModal()
  }

  close() {
    this.dialogRef.nativeElement.close()
  }
}
