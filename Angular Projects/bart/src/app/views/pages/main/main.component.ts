import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  apiURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=Z2R9-58Q2-9MUT-DWE9&json=y';

  constructor(private dataS: DataService) { }

  ngOnInit() {
    this.dataS.getURL(this.apiURL).subscribe(x => {console.log(x)})
  }

}
