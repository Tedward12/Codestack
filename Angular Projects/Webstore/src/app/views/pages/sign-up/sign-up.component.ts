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
    email: '',
    sAddress: ''
  };

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.loginInfo = this.dService.setLogin();
  }

  setLoginInfo(un: string,fn: string,ln: string,em: string,cem: string,sa: string,pw: string,cpw: string){

    if(em===cem && pw.length > 7){
      if(pw===cpw){
        if(this.dService.verifyUsername(un)){
          alert('Username already exists.')
        }
        else{
          this.dService.addUser(un, pw)
        }
      }
    }

    this.loginInfo.username = un;
    this.loginInfo.fName = fn;
    this.loginInfo.lName = ln;
    this.loginInfo.email = em;
    this.loginInfo.sAddress = sa;
    this.loginInfo.password = pw;
    this.dService.login = this.loginInfo;
  }

}
