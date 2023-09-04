export type Portfolio = {
  id: number;
  name: string;
  image: string;
  type: 'design' | 'prototype' | 'web' | 'mobile';
  link?: string;
  github?: string;
  figma?: string;
};
