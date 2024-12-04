import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroupProps } from './models/group';
import { ApíService } from './services/apí.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, ItemsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'cs-market'
  filters: GroupProps[] = []

  constructor(private apiService: ApíService) {}

  ngOnInit(): void {
    this.apiService.getGroups().subscribe(data => {
      this.filters = data
    })
  }


}
