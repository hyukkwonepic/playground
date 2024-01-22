import { isEven } from '@integrated-monorepo-tutorial/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
