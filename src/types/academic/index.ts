export type Semester = 'one' | 'two' | 'three' | 'four' | 'five' | 'six';

export type Academic = {
  id: number;
  name: string;
  semester: Semester;
  image: string;
  image_url?: string;
  description?: string;
};
