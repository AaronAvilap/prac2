import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-developer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {

  developerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  @Output()
  developerRegistered = new EventEmitter<{firstName: string, lastName: string}>();

  myOnSubmit() {
    let firstName = this.developerForm.value.firstName?.toString() ?? '';
    let lastName = this.developerForm.value.lastName?.toString() ?? '';

    this.onDeveloperRegistered(firstName, lastName);
  }

  onDeveloperRegistered(firstName:string, lastName: string){
    this.developerRegistered.emit({firstName, lastName});
  }

}
