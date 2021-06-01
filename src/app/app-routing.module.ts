import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormComponent } from './form/form.component';
import { UpdateEmployeeResolver } from './form/update-employee.resolver';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: 'employees/addEmployee',
    component: AddEmployeeFormComponent,
  },
  {
    path: 'employees/:employeeId',
    component: FormComponent,
    resolve: { resolvedEmployeeData: UpdateEmployeeResolver }
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
