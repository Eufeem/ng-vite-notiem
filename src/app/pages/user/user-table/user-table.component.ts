import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

// Components
import { NavbarComponent } from '../../../components/navbar/navbar.component'; 
import { UserFormComponent } from '../user-form/user-form.component';

// Modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { UserService } from '../../../services/user.service'; 
import { User } from '../../../models/User';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PanelModule,
    NavbarComponent,
    UserFormComponent,
    BadgeModule
  ],
  providers: [UserService],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  columns: string[] = ["#", "Username", "Nombre", "Apellido", "Email", "Estatus"]
  userService = inject(UserService);
  userList: User[] = []

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: response => {
        this.userList = response
      }, error: err => {
        console.error('Error:', err)
      }, complete: () => {
        console.log('Complete')
      }
    })
  }

}
