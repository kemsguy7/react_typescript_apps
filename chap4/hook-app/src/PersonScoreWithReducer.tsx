// import { useEffect, useState, useReducer } from 'react';
// import { getPerson } from './getPerson';

// //defining types for useReducer
// type State = {
//   name: string | undefined;
//   score: number;
//   loading: boolean;
// };

// //defining types for all the action objects
// type Action =
//   | { type: 'initialize'; name: string }
//   | { type: 'increment' }
//   | { type: 'decrement' }
//   | { type: 'reset' };

// //define the type reducer function
// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'initialize':
//       return { name: action.name, score: 0, loading: false };
//     case 'increment':
//       return { ...state, score: state.score + 1 };
//     case 'decrement':
//       return { ...state, score: state.score - 1 };
//     case 'reset':
//       return { ...state, score: 0 };

//     default:
//       return state;
//   }
// }

// export function PersonScoreWithReducer() {
//   // const [name, setName] = useState<string | undefined>();
//   // const [score, setScore] = useState(0);
//   // const [loading, setLoading] = useState(true);

//   //replacing the useState hooks above with useReducer
//   const [{ name, score, loading }, dispatch] = useReducer(reducer, {
//     name: undefined,
//     score: 0,
//     loading: true,
//   });

//   // useEffect(() => {
//   //   getPerson().then((person) => console.log(person));
//   // }, []); // first effect using promise

//   useEffect(() => {
//     getPerson().then(({ name }) => dispatch({ type: 'initialize', name }));
//     console.log(name + ' is the name');
//   }, []);

//   //  display a loading indicator while the loading state is set to true
//   if (loading) {
//     return <div> Loading... </div>;
//   }

//   return (
//     <div>
//       <h3>
//         {' '}
//         {name}, {score}
//       </h3>

//       <button onClick={() => dispatch({ type: 'increment' })}> Add </button>
//       <button onClick={() => dispatch({ type: 'decrement' })}> Subtract </button>
//       <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
//     </div>
//   );

//   //Effect using async await
//   // useEffect(() => {
//   //   async function getThePerson() {
//   //     const person = await getPerson();
//   //     console.log(person);
//   //   }
//   //   getThePerson();
//   // }, []);
// }
