import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  ionicForm: any = FormGroup;
  defaultDate = new Date().toISOString();
  isSubmitted = false;
  isLoader= false;
  constructor(public formBuilder: FormBuilder, private alertController: AlertController, private router: Router) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      gotra: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(6)]],
      refcode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    })
  }
  getDate(data:any) {
    this.defaultDate = new Date(data.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(this.defaultDate, {
      onlyself: true
    })
    
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //header: 'Thanks! your account has been successfully created.',
      subHeader: 'Thanks! your account has been successfully created.',
      message: 'This is an alert!',
      buttons: [{
        text: 'Login',
        role: 'Login',
        cssClass: 'secondary',
        handler: (blah) => {
          this.router.navigate(['/login']);
        }}],
      
    });
    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log(this.ionicForm.value)
      console.log('Please provide all the required values!')
      //return false;
    } else {
      this.isLoader = true
      setTimeout(()=> {
        this.isLoader = false;
        this.presentAlert();
      }, 2000);
      console.log(this.ionicForm.value)
    }
  }

}
