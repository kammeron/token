import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    useHandle = true;
    user: any;
    userLogin: any;
    error: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
      this.user = { email: '', password: ''}
  }
  login(){
      this.error = null;
      let observable = this._httpService.userLogin(this.user);
      observable.subscribe(data => {
          let info:any = data;
          if (info.status === 200) {
              this.goHome();
          }
          else {
              this.error = 'Incorrect Credentials'
          }
      });
  }
  // findUser(){
  //     let observable = this._httpService.getUserByEmail(this.user.email);
  //     observable.subscribe(data => {
  //         this.userLogin = data;
  //         if (this.user.password === this.userLogin.password) {
  //             this.goHome();
  //         }
  //         else {
  //             this.error = 'Incorrect Credentials'
  //         }
  //     })
  // }
  goHome(){
      this._router.navigate([`/`]);
  }

}
