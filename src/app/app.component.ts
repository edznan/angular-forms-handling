import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  error = '';
  hint = '';
  toastMessage = '';
  toastLabel = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl('', [Validators.required]),
      graduationDate: new FormControl(''),
      note: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
