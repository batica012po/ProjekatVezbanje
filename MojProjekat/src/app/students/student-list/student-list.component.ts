import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[]=[];

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.studentService.vratiSveStudente().subscribe(students=>{this.students=students; console.log (this.students)})
  }

  potvrdaBrisanja(id:number){
    if(confirm('Da li ste sigurni?')){
      this.studentService.obrisiStudenta(id).subscribe({
        next: student => {
          this.studentService.vratiSveStudente().subscribe(students=>{this.students=students; console.log (this.students)});
        }});
    }
  }

  dodajStudenta(){
    this.router.navigate(['/add-student']);
  }

  prikaziDetalje(id: number){
    this.router.navigate(['/student-details/'+id])
  }

}
