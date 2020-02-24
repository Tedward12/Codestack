import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Departure } from '../interfaces/departure';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  destination = [];//: Departure[] = this.dService.depart;
  town = this.dService.town;
  address = this.dService.address;
  city = this.dService.city;
  county = this.dService.county;
  zipcode = this.dService.zipcode;

constructor(
  private dService: DataService
) { }

ngOnInit() {
  this.dService.getData().subscribe(x => console.log(x));
  this.dService.getStations();
  this.destination = this.dService.depart;
}

getDepartData(){
  console.log(this.destination);
  console.log(this.town);
}

}
