import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  projects = [
    {href: '../Projects/puppy-restaurant',pName: 'Puppy Restaurant', pLang:'HTML5, CSS, Bootstrap', pDesc: 'In this project I got a prototype of a restaurant site, and had to make it using the above languages.', pImg: 'assets/puppy.png'},
    {href: '../Projects/hamster-hotel',pName: 'Hamster Hotel', pLang:'HTML5, CSS, Bootstrap', pDesc: 'In this project I got a prototype of a hotel / resort site, and had to make it using the above languages.', pImg: 'assets/hamster.png'},
    {href: '../Projects/weather',pName: 'Weather API', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project everyone made a prototype of a weather application, and eneded up switching prototypes with a random person.', pImg: 'assets/weather.png'},
    {href: '../Projects/trivia-game',pName: 'Epic 7 Trivia Game', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project I used a prototype that i made to make a trivia game about a popular mobile game.', pImg: 'assets/trivia.png'},
    {href: '../Projects/to-do-list',pName: 'To Do List', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project I used javascript to make a functioning to do list.', pImg: 'assets/list.png'},
    {href: '../Projects/codestack-directory',pName: 'Codestack Student Directory', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project I made a directory of my class.', pImg: 'assets/directory.png'},
    {href: '../Projects/game-ranking',pName: 'Game Ranking Website', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project I was teamed up with 1 other person, to make a website of our top 15 games.', pImg: 'assets/gaming.png'},
    {href: '../Projects/bussiness-redevelopment',pName: 'Bussiness Redevelopment', pLang:'HTML5, CSS, Bootstrap, Javascript', pDesc: 'In this project I was teamed up with 2 other people, and we were tasked with redeveloping a local business\' website.', pImg: 'assets/bussiness.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
