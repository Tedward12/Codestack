import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {pName: 'Puppy Restaurant', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Hamster Hotel', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Weather API', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Epic 7 Trivia Game', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'To Do List', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Codestack Student Directory', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Game Ranking Website', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'},
    {pName: 'Bussiness Redevelopment', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: '...', pImg: '/assets/camaroBackground.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
