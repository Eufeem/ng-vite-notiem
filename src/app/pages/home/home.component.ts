import { Component, OnInit } from '@angular/core';

// Components
import { NavbarComponent } from '../../components/navbar/navbar.component';

// Modules
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormControl, 
    FormGroup, 
    ReactiveFormsModule, 
    Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ButtonModule,
    PanelModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: []
})
export class HomeComponent implements OnInit {

  identicator: string = 'a'
  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void { }

  onSubmit() {
    console.warn(this.formGroup.value);
    this.formGroup.reset()
  }

}
