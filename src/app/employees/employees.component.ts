import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : any[];

  constructor(private es : EmployeeService){

  }

  ngOnInit(){
    this.es.getEmployees().subscribe(
      (response : any) => {
        this.employees = response.data;
      },
      error => console.log(error)
    )
  }

}
