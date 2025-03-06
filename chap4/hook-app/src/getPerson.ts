type Person = {
  name: string;
};

//this function asynchronously returns an objet, { name: "Bob"}, after a second has elapsed
export function getPerson(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: 'Bob' }), 4000));
}
