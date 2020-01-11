import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../interfaces/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Output() selectedStudent = new EventEmitter();
  students: Student[] = [];

  constructor(private dataService: DataService) {
    this.students = dataService.getStudents();
   }

  ngOnInit() {
  }
  studentClicked(person: Student){
    //alert(person.fN)
    this.selectedStudent.emit(person);
  }
}
