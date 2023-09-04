export type Semester = 'one' | 'two' | 'three' | 'four' | 'five' | 'six';

export type Academic = {
  name: string;
  semester: Semester;
  image: string;
  description?: string;
};
