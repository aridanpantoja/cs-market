import { CommonModule } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
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
