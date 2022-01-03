import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';


@Injectable({ // injeção de dependencias da classe
  providedIn: 'root' // Instancia fornecida na raiz do projeto
})

export class CoursesService {
  //end-point URL :
  private readonly API = '/asets/courses.json';

//Chamada Ajax - chamada Assicrona para o servidor
//- Injeção de dependencia
// Precisa importar no app.Module para ser Global
  constructor(private httpClient: HttpClient) { }


  list() {
    // Operador diamante / Generics passar o tipo
    // Pipe means Cano, programação reativa.
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(3000),

      tap(courses => console.log(courses))
    );
  }
}
