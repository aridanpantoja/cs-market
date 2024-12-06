import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ItemsListComponent } from '../../components/items-list/items-list.component'
import { RarityProps } from '../../models/rarity'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  rarities: RarityProps[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRarities().subscribe((data) => {
      this.rarities = data
    })
  }
}
