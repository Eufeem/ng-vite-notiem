import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    PanelModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DropdownModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  @Input() form!: boolean;
  @Output() formChange = new EventEmitter<boolean>();
  statusArray: any = [
    { value: 1, name: 'Activo' },
    { value: 2, name: 'Inactivo' }
  ];

  showFormEvent() { 
    this.form = !this.form;
    this.formChange.emit(this.form);
  }
}
