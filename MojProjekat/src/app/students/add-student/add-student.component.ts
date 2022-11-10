import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student?: Student;
  studentForm?: FormGroup;

  constructor(private formBuilder:FormBuilder, private studentService:StudentService, private router:Router ) { }

  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm(){
    this.studentForm = this.formBuilder.group({
      ime:[this.student?.ime],
      prezime: [this.student?.prezime],
      brojIndeksa:[this.student?.brojIndeksa],
      datumRodjenja:[this.student?.datumRodjenja],
      ulica:[this.student?.ulica],
      grad: [this.student?.grad],
    });
  }

  dodajStudenta(){
    const student = this.studentForm?.getRawValue();
    this.studentService.dodajStudenta(student).subscribe({
      next: student => {
        this.router.navigate(['/students'])
      }});
    console.log("implementirati metodu");
  }
}
