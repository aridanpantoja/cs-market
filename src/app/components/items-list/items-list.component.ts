import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApíService } from '../../services/apí.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit {
  products: any[] = []

  constructor(private apiService: ApíService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data; // Atribuindo os dados recebidos ao array de produtos
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }
}
