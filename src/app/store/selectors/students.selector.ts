import { Student } from '../../student';

interface AppState {
  students: Student[];
}

const selectStudents = (state: AppState) => state.students;
const selectStudent = (state: AppState, props: { id: number }) =>
  state.students.find((student) => student.id === props.id) || {
    id: 0,
    name: 'not found',
    age: 0,
  };
export { selectStudents, selectStudent };
