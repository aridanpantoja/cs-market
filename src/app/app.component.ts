import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, ItemsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cs-market'

  filters = [
    { label: 'Equipamento' },
    { label: 'Pistolas' },
    { label: 'Mid-Tier' },
    { label: 'Rifles' },
    { label: 'Granadas' },
    { label: 'CT' },
    { label: 'TR' },
  ]
}
