import { CommonModule } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { LucideAngularModule, ShoppingBag } from 'lucide-angular'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  readonly ShoppingBag = ShoppingBag

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
