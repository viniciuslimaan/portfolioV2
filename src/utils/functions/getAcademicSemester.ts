import { Semester } from '../../types/academic';

export const getAcademicSemester = (semester: Semester): string => {
  if (semester === 'one') return '1º Semestre';
  if (semester === 'two') return '2º Semestre';
  if (semester === 'three') return '3º Semestre';
  if (semester === 'four') return '4º Semestre';
  if (semester === 'five') return '5º Semestre';
  if (semester === 'six') return '6º Semestre';

  return '-';
};
