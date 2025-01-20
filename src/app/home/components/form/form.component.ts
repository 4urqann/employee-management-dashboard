import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { User } from '../../../auth/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  constructor (private empService: EmployeeService,
    private router: Router
  ) {}

    openEmp = this.empService.employee;
    employees!: User[];

    departments = ["IT", "HR", "Finance"];

    // existingEmp: User = this.empService.employee;


    ngOnInit(): void {
      // console.log("Update form reached");
      // this.route.params.subscribe((params: any) => {
      //   this.getEmp(params.id);
      //   console.log(params);
      // })
      this.getEmp();
    }

    getEmp() {
      this.employees = this.empService.users;
  
      this.employees.forEach(emp => {
        if (emp.id == this.empService.employee.id) {
          this.openEmp = emp;
        } else {}
      });
    }
  
    updateForm: FormGroup = new FormGroup({
      "name": new FormControl(this.openEmp.name, Validators.required),
      "username": new FormControl(this.openEmp.username, [Validators.required, Validators.email]),
      "password": new FormControl(this.openEmp.password, [Validators.required, Validators.minLength(8)]),
      "department": new FormControl(this.openEmp.department, Validators.required)
    });

    submit() {
      const index = this.empService.users.indexOf(this.openEmp);
      this.empService.users.splice(index, 1, this.updateForm.value);
      this.router.navigate(['home']);
    }

}
