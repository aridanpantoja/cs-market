import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { CharmProps } from '../../models/charm'
import { ApiService } from '../../services/api.service'
import { CardComponent } from '../card/card.component'
@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent implements OnInit {
  charms: CharmProps[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCharms().subscribe(
      (data) => {
        this.charms = data
      },
      (error) => {
        console.error('Erro ao carregar produtos', error)
      },
    )
  }
}
