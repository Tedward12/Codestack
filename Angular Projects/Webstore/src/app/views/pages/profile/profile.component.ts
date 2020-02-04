import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loginInfo: Login;
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.loginInfo = this.dService.setLogin();
  }

}
