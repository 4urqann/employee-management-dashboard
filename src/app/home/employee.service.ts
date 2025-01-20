import { User } from './../auth/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,
    private router: Router,
    
  ) { }

  baseURL = "http://localhost:3000/users";

  // filteredUsers!: User[];
  users!: User[];

  employee!: User;

  getAllUsers() {
    this.http.get<User[]>(this.baseURL)
      .subscribe((users: User[]) => {
        this.users = users;
        // this.filteredUsers = users;
      });
  }

  addEmp(id: any) {

  }

  editEmp(user: User) {
    // this.router.navigate(['home', 'edit', id]);
    this.router.navigate(['home/edit'])
    this.employee = user;
    
  }

  deleteEmp(user: User) {
    console.log("deleteEmp Called");
    console.log(user);
    
    const index = this.users.indexOf(user);
    console.log(index);
    this.users.splice(index, 1);

    // this.http.delete<User[]>(this.baseURL).subscribe(
    //   () => {
    //     this.router.navigate(['/home'])
    //   } )
  }

}
