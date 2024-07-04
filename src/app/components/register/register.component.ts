import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]), //star is represent the next string

    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]),

    emailaddress: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    mobilenumber: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),

    gender: new FormControl(''),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),

    rpwd: new FormControl(''),
  });

  registerSubmited() {
    let tempArr=[];
    if (this.Password.value == this.ConfirmPassword.value) {
      console.log(this.registerForm.value);
      this.repeatPass = 'none'
      if(localStorage.getItem("formdata")){
        tempArr=[... JSON.parse(localStorage.getItem("formdata"))];
        tempArr.push(this.registerForm.value);
        localStorage.setItem("formdata", JSON.stringify(tempArr))
      }
      else{
      localStorage.setItem("formdata", JSON.stringify([this.registerForm.value]))
      }
      this.registerForm.reset()
    } else {
      this.repeatPass = 'inline'
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("emailaddress") as FormControl;
  }
  get MobileNumber(): FormControl {
    return this.registerForm.get("mobilenumber") as FormControl;
  }
  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  get ConfirmPassword(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }

}