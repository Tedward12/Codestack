import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginInfo: Login = {
    fName: '',
    lName: '',
    username: '',
    password: '',
    email: ''
  };

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.loginInfo = this.dService.setLogin();
  }

  setLoginInfo(un: string,fn: string,ln: string,em: string,pw: string){
    this.loginInfo.username = un;
    this.loginInfo.fName = fn;
    this.loginInfo.lName = ln;
    this.loginInfo.email = em;
    this.loginInfo.password = pw;
    this.dService.login = this.loginInfo;
  }

}
