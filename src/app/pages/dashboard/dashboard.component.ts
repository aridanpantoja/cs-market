import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ButtonComponent } from '../../components/button/button.component'
import { RarityProps } from '../../models/rarity'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  groups: RarityProps[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRarities().subscribe((data) => {
      this.groups = data
    })
  }
}
