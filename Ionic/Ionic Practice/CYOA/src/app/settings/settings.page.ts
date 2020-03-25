import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  musicOn=true;
  rickRoll = new Audio();
  rick = false;

  constructor(private dService: DataService) { }

  ngOnInit() {
  }

  music(){
    if(!this.musicOn&&!this.rick){
      this.dService.playMusic();
      this.musicOn=true;
    }
    else{
      this.dService.stopMusic();
      this.musicOn=false;
    }
  }

  RickRoll(){
    this.dService.stopMusic();
    this.rickRoll.src = "assets/NeverGonnaGiveYouUpOriginal.mp3";      
    this.rickRoll.play();
    this.rick=true;
  }

}
