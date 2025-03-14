import { useEffect, useReducer, useRef } from 'react';
import { getPerson } from '../getPerson';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'reset';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export default function PersonScoreWithRef() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  // Effect to get person name
  useEffect(() => {
    getPerson().then(({ name }) => dispatch({ type: 'initialize', name }));
  }, []);

  //Invoke the focus method to move the focus to it when the person's information has been fetched .
  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus(); // optional chaining allows the focus method to be invoked without having to check that current is not null
    }
  }, [loading]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
