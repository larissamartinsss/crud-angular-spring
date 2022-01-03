import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, pipe } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // Indica que é um observable $$$:
  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
    ) {
    // this.courses = [];
    //this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError( error => {
        this.onError('Error on loading data')
        return of([]) //criando observable vazio
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  ngOnInit(): void {

  }

}
