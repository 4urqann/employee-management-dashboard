import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { User } from '../../../auth/user';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-emp-tile',
  templateUrl: './emp-tile.component.html',
  styleUrl: './emp-tile.component.scss'
})
export class EmpTileComponent {
  constructor(private empService: EmployeeService,
    private router: Router
  ) {}

  @Input() currentUser!: User;

  addEmp() {
    this.router.navigate(['signup'])
  }

  updateEmp(user: User) {
    this.empService.editEmp(user);
  }

  removeEmp(user: User) {
    this.empService.deleteEmp(user);
  }
}
