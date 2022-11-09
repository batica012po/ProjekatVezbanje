import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  
  vratiStudenta(){
    return this.httpClient.get<Student[]>('https://6009e7ab778d1a0017793292.mockapi.io/student')
    
  }

  obrisiStudenta(id:string){
    return this.httpClient.delete('https://6009e7ab778d1a0017793292.mockapi.io/student')
    
  }
}
