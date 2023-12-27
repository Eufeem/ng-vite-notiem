import { Component, OnInit, Pipe, inject } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { finalize, lastValueFrom, pipe } from 'rxjs';
import { Role } from '../../models/Role';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css',
  providers: [
    RoleService,
  ]
})
export class RoleComponent implements OnInit {

  // Services
  roleService = inject(RoleService);

  // Variables
  listRoles: Role[] = []

  ngOnInit(): void { 
    this.getAllRoles()
  }

  getAllRoles() {
    this.roleService.get().pipe(finalize(() => {
      console.log('Paso 1')
      this.getAll2()
    })).subscribe({
      next: response => {
        this.listRoles = response
        console.log(response)
      }
    })
  }

  getAll2() {
    this.roleService.get().pipe(finalize(() => {
      console.log('Paso 2')
      this.getAll3()
    })).subscribe({
      next: response => {
        this.listRoles = response
        console.log(response)
      }
    })
  }

  getAll3() {
    this.roleService.get().pipe(finalize(() => {
      console.log('Paso 3')
    })).subscribe({
      next: response => {
        this.listRoles = response
        console.log(response)
      }
    })
  }

}
