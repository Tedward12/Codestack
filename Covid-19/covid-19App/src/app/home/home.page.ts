import { Component } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: any = null;
  searchCountry: any;

  constructor(private dService: DataServiceService) { 

    this.dService.getCountries().subscribe((data)=>{
      this.countries = data;
    });
  }
}
