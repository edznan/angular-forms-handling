import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('toastElement', { static: true })
  toastEl!: ElementRef;

  form: FormGroup = new FormGroup({});

  response: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
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
    if (form.valid) {
      this.response = {
        type: 'success',
        message: 'From filled in properly',
      };
    } else {
      this.response = {
        type: 'error',
      };
      if (!form.controls['name'].valid) {
        if (form.controls['name'].errors.required) {
          this.response.message = 'Name is required';
        } else if (form.controls['name'].errors.minlength) {
          this.response.message = 'Name needs to contain at least 2 characters';
        }
        this.response.source = 'name';
        return;
      }
      if (!form.controls['age'].valid) {
        if (form.controls['age'].errors.required) {
          this.response.message = 'Age is required';
        } else if (form.controls['age'].errors.min) {
          this.response.message = 'You are too young';
        }
        this.response.source = 'age';
        return;
      }
      if (!form.controls['email'].valid) {
        if (form.controls['email'].errors.required) {
          this.response.message = 'Email is required';
        } else if (form.controls['email'].errors.email) {
          this.response.message = 'Please enter a correct email';
        }
        this.response.source = 'email';
        return;
      }
      if (!form.controls['password'].valid) {
        if (form.controls['password'].errors.required) {
          this.response.message = 'Password is required';
        } else if (form.controls['password'].errors.minLength) {
          this.response.message =
            'Password has to be at least 8 characters long';
        }
        this.response.source = 'password';
        return;
      }
      if (!form.controls['phone'].valid) {
        if (form.controls['phone'].errors.required) {
          this.response.message = 'Phone is required';
        }
        this.response.source = 'phone';
        return;
      }
    }
  }
}
