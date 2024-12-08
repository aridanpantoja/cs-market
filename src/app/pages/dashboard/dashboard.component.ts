import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ButtonComponent } from '../../components/button/button.component'
import { RarityProps } from '../../models/rarity'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharmProps } from '../../models/charm'
import { randomUUID } from 'crypto'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  groups: RarityProps[] = []
  charmForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.charmForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      rarity: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.apiService.getRarities().subscribe((data) => {
      this.groups = data
    })
  }

  onSubmit(): void {
    if (this.charmForm.valid) {
      const { name, price, image, rarity, quantity } = this.charmForm.value

      const newCharm: CharmProps = {
        id: "asdasdasd",
        slug: "asdasdasd",
        markethashname: name,
        pricelatest: Number(price),
        itemimage: image,
        rarity: rarity,
        quantity: quantity,
      }

      this.apiService.createCharm(newCharm).subscribe((result) => {
        console.log(result)
      }, (error) => {
        console.error(error)
      })
    }
  }
}
