import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    useHandle = true;
    newuser: any;
    passwordConfirm: any;
    errors: any = [];
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
      this.newuser = { email: '', name: '', password: ''};
      this.passwordConfirm = '';
  }
  makeUser(){
      if (this.newuser.email.length < 1) {
          this.errors.push('Email is required')
      }
      if (this.newuser.name.length < 1) {
          this.errors.push('Username is required')
      }
      if (this.newuser.password.length < 1) {
          this.errors.push('Password is required')
      }
      if (this.newuser.password != this.passwordConfirm){
          this.errors.push('Passwords do not match')
      }
      if (this.errors.length > 0){
          console.log(this.errors);
          this.newuser.password = '';
          this.passwordConfirm = '';
      }
      else {
          let observable = this._httpService.createUser(this.newuser);
          observable.subscribe(data => {
              console.log(data)
              this.newuser = { email: '', name: '', password: ''};
              this.passwordConfirm = '';
          });
          this.goHome();

      }
  }
  goHome(){
      this._router.navigate([`/`]);
  }
}
