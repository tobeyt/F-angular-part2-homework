import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Student } from '../student';
import { Store } from '@ngrx/store';
import { selectStudent } from '../store/selectors/students.selector';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.sass'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((paramMap) => Number(paramMap.get('id'))),
        mergeMap((id) => this.store.select(selectStudent, { id }))
      )
      .subscribe(
        (student) => (this.student = student),
        (error) => (this.errorMessage = error)
      );
  }
}
