import { Component } from '@angular/core'
import { ApíService } from '../../services/apí.service'
import { GroupProps } from '../../models/group'
import { CommonModule } from '@angular/common'
import { ItemsListComponent } from '../../components/items-list/items-list.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filters: GroupProps[] = []

  constructor(private apiService: ApíService) {}

  ngOnInit(): void {
    this.apiService.getGroups().subscribe((data) => {
      this.filters = data
    })
  }
}
