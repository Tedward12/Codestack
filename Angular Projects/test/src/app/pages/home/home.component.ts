import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash = [
    {
      title : 'project1', desc : 'trash 1', nfo : 'something 1'
    },
    {
      title : 'project2', desc : 'trash 2', nfo : 'something 2'
    },
    {
      title : 'project3', desc : 'trash 3', nfo : 'something 3'
    }
];
  constructor() { }

  ngOnInit() {
  }

}
