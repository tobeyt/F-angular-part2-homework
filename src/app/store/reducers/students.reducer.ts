import { Student } from '../../student';
import { createReducer, on } from '@ngrx/store';
import { setStudents } from '../actions/students.action';

const initState: Student[] = [];
const studentsReducer = createReducer(
  initState,
  on(setStudents, (state, props) => props.students)
);
export { studentsReducer };
