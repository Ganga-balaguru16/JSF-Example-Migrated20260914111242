import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator]],
      salary: ['', [Validators.required, this.salaryValidator]]
    });
  }

  ngOnInit(): void {}

  get fullName() { return this.employeeForm.get('fullName'); }
  get address() { return this.employeeForm.get('address'); }
  get email() { return this.employeeForm.get('email'); }
  get phone() { return this.employeeForm.get('phone'); }
  get salary() { return this.employeeForm.get('salary'); }

  phoneValidator(control: any) {
    const value = control.value;
    if (!value) return null;
    if (!value.startsWith('0')) {
      return { phoneInvalid: 'Invalid Phone Number!' };
    }
    if (value.length !== 10 && value.length !== 11) {
      return { phoneInvalid: 'Phone number must be 10 or 11 numbers!' };
    }
    return null;
  }

  salaryValidator(control: any) {
    const value = control.value;
    if (!value) return null;
    const salary = parseInt(value, 10);
    if (isNaN(salary)) {
      return { salaryInvalid: 'Salary must be number!' };
    }
    if (salary <=