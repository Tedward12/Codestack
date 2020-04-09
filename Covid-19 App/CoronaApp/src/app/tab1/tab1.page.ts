import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  info: any = null;

  constructor(private dService: DataService) { 

    this.dService.getAll().subscribe((data)=>{
      this.info = data;
    });
  }
}
