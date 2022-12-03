import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {
    path:'students', component: StudentListComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  },
  {
    path: 'student-details/:id', component: StudentDetailsComponent
  },
  {
    path: 'app-edit-student/:id', component: EditStudentComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
