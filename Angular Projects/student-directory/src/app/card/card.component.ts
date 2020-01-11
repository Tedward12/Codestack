import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() sStudent: Student;

  constructor() {
    
  }

  ngOnInit() {
  }
}
