import { useEffect, useState } from 'react';
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
      //
      setLoading(false);
      setName(person.name);
    });
  }, []);

  //  display a loading indicator while the loading state is set to true
  if (loading) {
    return <div> Loading... </div>;
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
