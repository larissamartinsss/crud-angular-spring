import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { tap } from 'rxjs';


@Injectable({ // injeção de dependencias da classe
  providedIn: 'root' // Instancia fornecida na raiz do projeto
})

export class CoursesService {
  //end-point URL :
  private readonly API = '/assets/courses.json';

//Chamada Ajax - chamada Assicrona para o servidor
//- Injeção de dependencia
// Precisa importar no app.Module para ser Global
  constructor(private httpClient: HttpClient) { }


  list() {
    // Operador diamante / Generics passar o tipo
    // Pipe means Cano, programação reativa.
    return this.httpClient.get<Course[]>(this.API)
    .pipe(

      tap(courses => console.log(courses))
    );
  }
}
