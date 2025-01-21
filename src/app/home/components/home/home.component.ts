import { User } from './../../../auth/user';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient,
    public empService: EmployeeService,
    public router: Router
  ) { }

  baseURL: string = "http://localhost:3000/users";

  // @Input() filterControl: FormControl = new FormControl('');

  // filteredUsers!: User[];
  
  ngOnInit(): void {

    this.empService.getAllUsers();
    

    this.empService.filterControl.valueChanges.subscribe((currentValue: any) => {
      console.log(currentValue);
      if (currentValue === '') {
        this.empService.filteredUsers = this.empService.users;
      } else {
        this.empService.filteredUsers = this.empService.users.filter((emp) => {
          return emp.name.toLowerCase().includes(currentValue.toLowerCase()) 
          || emp.username.toLowerCase().includes(currentValue.toLowerCase())
          || emp.department.toLowerCase().includes(currentValue.toLowerCase());
        });

      }
    });

    console.log("Home Loaded!!");
    console.log(this.empService.filteredUsers);
    
  }

  addEmp() {
    this.router.navigate(['signup'])
  }

}
