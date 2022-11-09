import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[]=[];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.vratiStudenta().subscribe(students=>{this.students=students; console.log (this.students)})
  }

  potvrdaBrisanja(id:string, index:number){

    if(confirm('Da li ste sigurni?')){
      this.studentService.obrisiStudenta(id);
      this.students.splice(index,1)
    }
  }

}
