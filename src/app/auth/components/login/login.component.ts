import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private http: HttpClient,
    private router: Router
  ) { }

  baseURL: string = "http://localhost:3000/users";

  loginForm: FormGroup = new FormGroup({
    "username": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  submit() {
    this.http.get<User[]>(this.baseURL).subscribe((data: User[]) => {
      let users = data;

      users.forEach(user => {
        if (this.loginForm.value.username === user.username && this.loginForm.value.password === user.password) {
          this.router.navigate(["home"]);
        }
      });
    })
  }
}
