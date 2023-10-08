export type Type = 'design' | 'prototype' | 'web' | 'mobile';

export type Portfolio = {
  id: number;
  name: string;
  image: string;
  image_url?: string;
  type: Type;
  deploy?: string;
  github?: string;
  figma?: string;
};
