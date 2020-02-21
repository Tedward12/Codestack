import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://spreadsheets.google.com/feeds/list/1afjLPJy68HgmvjrskQXsONGcafqK4HYH4QBaLP5i5JM/1/public/full?alt=json';
  audio = new Audio();


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.url);
  }

  playMusic(){
    this.audio.src = "assets/GameMenu.mp3";      
    this.audio.play();
  }

  stopMusic(){
    this.audio.pause();
  }
}
