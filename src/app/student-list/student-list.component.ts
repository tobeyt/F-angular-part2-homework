import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Store } from '@ngrx/store';
import { selectStudents } from '../store/selectors/students.selector';
import { loadStudents } from '../store/actions/students.action';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  selected: string;
  target: string;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.store
      .select(selectStudents)
      .subscribe((students) => (this.students = [...students]));
  }

  goto(): void {
    this.router.navigate(['/students', this.target]);
  }
}
