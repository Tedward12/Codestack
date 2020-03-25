import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../interfaces/info';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {


  info: Info = {
    scene: "",
    option1: "",
    option2: "",
    option3: "",
    ending: ""
  };
  id: number = 1;
  one = true;
  end = false;

  constructor(private dService: DataService) {
    dService.getData().subscribe(
      x => console.log(x)
    );
    dService.getData().subscribe(
      x => this.info = {
        scene: x.feed.entry[this.id-1].gsx$scene.$t,
        option1: x.feed.entry[this.id-1].gsx$choice1.$t,
        option2: x.feed.entry[this.id-1].gsx$choice2.$t,
        option3: x.feed.entry[this.id-1].gsx$choice3.$t,
        ending: "FALSE"
      }
    );
    console.log(this.info);
  }

  ngOnInit(){

  }

  getResult1(){
    this.dService.getData().subscribe(x => this.id = x.feed.entry[this.id-1].gsx$result1.$t as number);
    this.one = false;
    this.populateData();
  }

  getResult2(){
    this.dService.getData().subscribe(x => this.id = x.feed.entry[this.id-1].gsx$result2.$t as number);
    this.one = false;
    this.populateData();
  }

  getResult3(){
    this.dService.getData().subscribe(x => this.id = x.feed.entry[this.id-1].gsx$result3.$t as number);
    this.one = false;
    this.populateData();
  }

  populateData(){
    this.dService.getData().subscribe(
      x => this.info = {
        scene: x.feed.entry[this.id-1].gsx$scene.$t,
        option1: x.feed.entry[this.id-1].gsx$choice1.$t,
        option2: x.feed.entry[this.id-1].gsx$choice2.$t,
        option3: x.feed.entry[this.id-1].gsx$choice3.$t,
        ending: x.feed.entry[this.id-1].gsx$ending.$t
      }
    );
    if(this.info.ending == "TRUE"){
      this.end = true;
    }
  }
}
