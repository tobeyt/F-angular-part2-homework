import { createAction, props } from '@ngrx/store';
import { Student } from '../../student';

const loadStudents = createAction('LOAD_STUDENT');
const setStudents = createAction(
  'SET_STUDENT',
  props<{ students: Student[] }>()
);

export { loadStudents, setStudents };
