import { User } from './../../../auth/user';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient,
    public empService: EmployeeService
  ) { }

  baseURL: string = "http://localhost:3000/users";

  @Input() filterControl: FormControl = new FormControl('');

  // users:User[] = this.empService.users;
  filteredUsers!: User[];
  
  ngOnInit(): void {
    // this.empService.getAllUsers();

    this.filteredUsers = this.empService.users;
    // console.log(this.users[4]);
    
    this.empService.getAllUsers();

    this.filterControl.valueChanges.subscribe((currentValue: any) => {
      console.log(currentValue);
      if (currentValue === '') {
        this.filteredUsers = this.empService.users;
      } else {
        this.filteredUsers = this.empService.users.filter((emp) => {
          return emp.name.toLowerCase().includes(currentValue.toLowerCase()) 
          || emp.username.toLowerCase().includes(currentValue.toLowerCase())
          || emp.department.toLowerCase().includes(currentValue.toLowerCase());
        });

      }
    });

    console.log("Home Loaded!!");


  }

}
