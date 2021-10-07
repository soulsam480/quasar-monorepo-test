import { some } from 'app2/src/boot/some';

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

some;
