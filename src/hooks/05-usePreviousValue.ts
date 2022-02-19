import { useRef } from 'react';

export const usePreviousValue = <T = unknown>(value: T) => {
  const previousValue = useRef(value);

  return previousValue.current;
};
