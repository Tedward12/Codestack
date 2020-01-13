import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cardData: Student;

  private studentData: Student[] = [
    {
      fN: 'Trever', lN: 'Edwards', nN: 'Ted', sN: 'Trever Edwards', hob: 'Respecting Women', img: './assets/Trevor_Edwards_Headshot-2.jpg'
    },
    {
      fN: 'Deon',lN: 'Simmons Jr.',sN: 'Deon',nN: 'N/A',hob: 'Reading Comics', img: './assets/placeholder.png'
    },
    {
      fN: 'Joseangel',lN: 'Pantoja',sN: 'Angel',nN: 'Angel',hob: 'Hiking', img: './assets/placeholder.png'
    },
    {
      fN: 'Esteban',lN: 'Zaragoza',sN: 'Esteban Z',nN: 'uB Darkness',hob: 'chillin', img: './assets/placeholder.png'
    },
    {
      fN: 'Nimish',lN: 'Lal',sN: 'Nimish Lal',nN: 'Nimish',hob: 'playing video games', img: './assets/placeholder.png'
    },
    {
      fN: 'Lourn',lN: 'Selga',sN: 'Lourn?',nN: 'Lrrrn',hob: 'Plastic Model Building', img: './assets/placeholder.png'
    },
    {
      fN: 'Jon', lN: 'Stewart', sN: 'Jon Stewart', hob: 'Liking characters to death', nN: 'Jon-less H', img: './assets/placeholder.png'
    },
    {
      fN: 'Johnny',lN: 'Uribe',sN: 'JohnnyU',nN: 'Johnny',hob: 'Long walks on the beach', img: './assets/placeholder.png'
    },
    {
      fN: 'Abraham',lN: 'Lopez',sN: 'something',nN: 'Abe',hob: 'Reading Manga', img: './assets/placeholder.png'
    },
    {
      fN: 'Robert',lN: 'Burns',sN: 'Robert Burns',hob: 'Airsoft',nN: 'Rob', img: './assets/placeholder.png'
    },
    {
      fN: "Zach",lN: "Davis",sN: "zdavis",nN: "Wynan",hob: "games", img: './assets/placeholder.png'
    },
    {
      fN: 'David',lN: 'Abdallah',sN: 'DaveDaAverageDude',nN: 'Dave',hob: 'Work', img: './assets/placeholder.png'
    },
    {
      fN: 'Carter', lN: 'Galvez', sN: 'carter209cg', hob: 'Messing up logic and code', nN: 'son of Bonacci', img: './assets/placeholder.png'
    },
    {
      fN: 'Carson',lN: 'Huber',sN: 'EcstaticCarson',nN: 'Carson',hob: 'Playing games & exercising', img: './assets/placeholder.png'
    },
    {
      fN: 'Francisco',lN: 'Chavez',nN: 'Frankie',hob: 'reading',sN: 'Francisco Chavez', img: './assets/placeholder.png'
    },
    {
      fN: 'Joseph',lN: 'Perez',nN: 'Joe',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    },
    {
      fN: 'Jose',lN: 'Martinez',nN: 'idk',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    },
    {
      fN: 'Alex',lN: 'Her',nN: 'idk',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    },
    {
      fN: 'Nayo',lN: 'Ortiz',nN: 'N/A',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    },
    {
      fN: 'Bisola',lN: 'Awujoola',nN: 'N/A',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    },
    {
      fN: 'Kevin',lN: 'Caballero',nN: 'N/A',hob: 'N/A',sN: 'N/A', img: './assets/placeholder.png'
    }
  ];
  constructor() { }

  getStudents(): Student[] {
    return this.studentData;
  }

  setCardData(person: Student){
    this.cardData = person;
  }

  getCardData(): Student {
    return this.cardData;
  }
}
