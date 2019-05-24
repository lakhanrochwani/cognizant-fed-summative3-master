import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeeInfoService } from './employee-info.service';
import { Employee } from './employee';
@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private employeeinfoservice: EmployeeInfoService) { }

  ngOnInit() {
    this.employeeForm = this.formbuilder.group({
      name: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      phone: [''],
      title: [''],
      dateJoined: ['']
    });
  }
  submit(){
    const employee = new Employee();
    employee.name = this.employeeForm.value.name;
    employee.address = this.employeeForm.value.address;
    employee.city = this.employeeForm.value.city;
    employee.state = this.employeeForm.value.state;
    employee.zip = this.employeeForm.value.zip;
    employee.phone = this.employeeForm.value.phone;
    employee.title = this.employeeForm.value.title;
    employee.dateJoined = this.employeeForm.value.dateJoined;

    console.log(employee);
    this.employeeinfoservice.submit(employee).subscribe(data => {
      console.log("Data",data);
    })

  }

}
