import axios from 'axios';

export const http = axios.create();

export function test(): string {
  return 'test';
}
