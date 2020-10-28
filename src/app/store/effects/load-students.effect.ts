import { Injectable } from '@angular/core';
import { StudentService } from '../../student.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadStudents, setStudents } from '../actions/students.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class LoadStudentsEffect {
  loadStudentsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map((students) => setStudents({ students })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}
}
