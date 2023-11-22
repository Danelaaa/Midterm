import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUser } from '../services/formuser.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  // userForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.userForm = this.fb.group({
  //     firstname: ['', [Validators.required, Validators.minLength(3)]],
  //     lastname: ['', [Validators.required, Validators.minLength(3)]],
  //     phone: ['', [Validators.required, Validators.minLength(9)]],
  //     email: ['', [Validators.required, Validators.minLength(8)]],
  //   });
  // }

  // submitForm() {
  //   if (this.userForm.valid) {
      
  //     console.log(this.userForm.value);
  //   }
  // }

  
  // onclickButton(){
  //   console.log(this.userForm.value);
  // }


}
