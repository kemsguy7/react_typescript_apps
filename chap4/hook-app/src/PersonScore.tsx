import { useEffect, useState, useReducer } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getPerson().then((person) => console.log(person));
  // }, []); // first effect using promise

  useEffect(() => {
    getPerson().then((person) => console.log(person));
  }, []);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
      // console.log('State Values', loading, name);
    });
  }, []);

  //  display a loading indicator while the loading state is set to true
  if (loading) {
    return <div> Loading... </div>;
  }

  //defining types for useReducer
  type State = {
    name: string | undefined;
    score: number;
    loading: boolean;
  };

  //defining types for all the action objects
  type Action =
    | { type: 'initialize'; name: string }
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };

  //define the type reducer function
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

  return (
    <div>
      <h3>
        {' '}
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}> Reset </button>
    </div>
  );

  //Effect using async await
  // useEffect(() => {
  //   async function getThePerson() {
  //     const person = await getPerson();
  //     console.log(person);
  //   }
  //   getThePerson();
  // }, []);
}
