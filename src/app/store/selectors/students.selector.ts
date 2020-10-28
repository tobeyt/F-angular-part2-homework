import { Student } from '../../student';

const selectStudents = (state: { students: Student[] }) => state.students;
export { selectStudents };
