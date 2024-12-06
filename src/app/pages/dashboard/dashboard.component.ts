import { Component, OnInit } from '@angular/core';
import { ApíService } from '../../services/apí.service';
import { GroupProps } from '../../models/group';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  groups: GroupProps[] = [] 

  constructor(private apiService: ApíService) {}

  ngOnInit(): void {
    this.apiService.getGroups().subscribe((data) => {
      this.groups = data
    })
  }
}
