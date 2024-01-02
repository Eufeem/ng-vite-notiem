import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Table, TableModule } from 'primeng/table';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    NavbarComponent
  ],
  providers: [
    UserService
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

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
