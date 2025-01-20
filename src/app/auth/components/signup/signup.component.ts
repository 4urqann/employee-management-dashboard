import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private http: HttpClient,
    private router: Router
  ) { }

  baseURL: string = "http://localhost:3000/users";

  departments = ["IT", "HR", "Finance"];

  signupForm: FormGroup = new FormGroup({
    "name": new FormControl(null, Validators.required),
    "username": new FormControl(null, [Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
    "department": new FormControl(null, Validators.required)
  });

  get username(): AbstractControl | null {
    return this.signupForm.get(['username']);
  }

  submit() {
    this.http.post(this.baseURL, this.signupForm.value).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      }
    )
  }
}
