import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeService } from './services/employees.service';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

const appRoutes = [
  {path : '', component : EmployeesComponent},
  {path : 'new', component : NewEmployeeComponent},
  {path : ':id/edit', component : EditEmployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
