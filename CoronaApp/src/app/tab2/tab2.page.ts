import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  countries: any = null;
  searchCountry: any;

  constructor(private dService: DataService) { 

    this.dService.getCountries().subscribe((data)=>{
      this.countries = data;
    });
  }

  // getCountry(key){
  //   if(key.code == 'Enter'){
  //     this.countries = null;
  //     console.log(this.searchCountry);
  //     this.dService.getCountry(this.searchCountry).subscribe((data)=>{
  //       this.countries = data;
  //     });
  //   }
  // }

}
