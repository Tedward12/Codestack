import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {pName: 'Puppy Restaurant', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: 'Hamster Hotel', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: 'Weather API', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: '...', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: '...', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: '...', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: '...', pLang:'...', pDesc: '...', pImg: '...'},
    {pName: '...', pLang:'...', pDesc: '...', pImg: '...'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
