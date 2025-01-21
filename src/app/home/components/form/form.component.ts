import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { User } from '../../../auth/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  constructor(private empService: EmployeeService,
    private http: HttpClient,
    private router: Router
  ) { }

  baseURL: String = "http://localhost:3000/users";

  openEmp = this.empService.emp;
  employees!: User[];
  updateForm!: FormGroup;
  departments = ["IT", "HR", "Finance"];

  // existingEmp: User = this.empService.employee;


  ngOnInit(): void {
    // console.log("Update form reached");
    // this.route.params.subscribe((params: any) => {
    //   this.getEmp(params.id);
    //   console.log(params);
    // })
    // this.getEmp();
    this.initForm();
  }

  // getEmp() {
  //   this.employees = this.empService.users;

  //   this.employees.forEach(emp => {
  //     if (emp.id == this.empService.emp.id) {
  //       this.openEmp = emp;

  //     } else {}
  //   });
  // }
  initForm(): void {
    this.updateForm = new FormGroup({
      "name": new FormControl(this.openEmp?.name, Validators.required),
      "username": new FormControl(this.openEmp?.username, [Validators.required, Validators.email]),
      "password": new FormControl(this.openEmp?.password, [Validators.required, Validators.minLength(8)]),
      "department": new FormControl(this.openEmp?.department, Validators.required)
    });
  }

  submit() {
    // const index = this.empService.users.indexOf(this.openEmp);
    // this.empService.users.splice(index, 1, this.updateForm.value);
    // this.empService.filteredUsers = this.empService.users;
    // console.log(this.empService.filteredUsers);
    
    this.http.put(`${this.baseURL}/${this.openEmp.id}`, this.updateForm.value ).subscribe(
      (res) => {
        this.router.navigate(['home']);
        
      }
    );
  }

}
