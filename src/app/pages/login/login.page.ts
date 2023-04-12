import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  data: any;
  loginWith: string = 'phone';
  isNext: boolean = false;
  //ionicForm: any =  FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, private toastController: ToastController, private router: Router) {
    this.data = {
      email: '',
      phone: '',
      tos: false,
      otp:  {
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: ''
      }
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

  loginWithfn(type: string) {
      this.loginWith = type;
      this.data = {
        email: '',
        phone: '',
        tos: false,
        otp:  {
          otp1: '',
          otp2: '',
          otp3: '',
          otp4: '',
          otp5: '',
          otp6: ''
        }
      };
      this.isNext = false;
      
  }
  otpController(event:any,next:any,prev:any){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
 }
 getOtp() {
  this.isNext = true;
  if(this.loginWith === 'phone') {
      console.log(this.data.phone)
  }else {
    console.log(this.data.email)
  }
 }
  submitForm(myForm: NgForm) {
    this.isSubmitted = true;
    this.router.navigate(['/dashboard']);
    console.log('onSubmit');
    //console.log(myForm);
    console.log(this.data)
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
