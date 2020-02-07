import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: User;

  constructor(private dService: DataService) { }

  ngOnInit() {
  }

  setUser(){
    this.dService.signedInUser = this.login;
  }

}
