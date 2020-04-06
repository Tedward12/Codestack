import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.dService.GetTracks().subscribe(x => console.log(x));
    this.dService.addTrack({
      "artistName": "McVaffe",
      "trackName": "China Street Beat",
      "albumName": "Street Fighter 2",
      "trackUrl": "https://codestackcdnwest.blob.core.windows.net/muiscstreaming/Street_Fighter_2_China_Street_Beat_OC_ReMix.mp3"
  }).subscribe(x => console.log(x));
  }

}
