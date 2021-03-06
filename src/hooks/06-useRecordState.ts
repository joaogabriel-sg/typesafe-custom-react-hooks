import { useReducer } from 'react';

type AnyObject = Record<string, unknown>;

type StateAction<S> =
  | Partial<Record<keyof S, S[keyof S]>>
  | import('react').ReducerWithoutAction<S>;

export const useRecordState = <T extends AnyObject>(initialState: T) =>
  useReducer((prevState: T, action: StateAction<T>) => {
    if (typeof action === 'function') {
      return {
        ...prevState,
        ...action(prevState),
      };
    }

    const hasUpdated = Object.entries(action).some(
      ([key, value]) => prevState[key] !== value,
    );

    return hasUpdated ? { ...prevState, ...action } : prevState;
  }, initialState);

const useTest = () => {
  const [a, b] = useReducer((prevState) => prevState, { prop1: 'prop1' });

  return '';
};
