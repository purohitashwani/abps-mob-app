import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // standalone: true,
  // imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  OTP: string = '';
  data: any;

  loginWith: string = 'phone'
  //ionicForm: any =  FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, private toastController: ToastController) {
    this.data = {
      email: '',
      phone: '',
      tos: false
    };
   }


  ngOnInit() {
    // this.ionicForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   password: ['', [Validators.required, Validators.minLength(5)]],
    //   // dob: [this.defaultDate],
    //   // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    // })
  }
  // getDate(event: any) {
  //   let date = new Date(event.target.value).toISOString().substring(0, 10);
  //   this.ionicForm.get('dob').setValue(date, {
  //     onlyself: true
  //   })
  // }
  // get errorControl() {
  //   return this.ionicForm.controls;
  // }
  otpController(event?:any,next?:any,prev?:any, index?:any){
    console.log(index)
    if(index == 6) {
      console.log("submit")
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
 }
  submitForm(myForm: NgForm) {
    console.log(myForm)
    // this.toastController.create({
    //   message: 'Hello World!',
    //   duration: 15000,
    //   position: 'top'
    // });
    // console.log('sdfasfs')
    // this.isSubmitted = true;
    // if (!this.ionicForm.valid) {
    //   console.log('Please provide all the required values!')
    //   //return false;
    // } else {
    //   console.log(this.ionicForm.value)
    // }
  }

}
