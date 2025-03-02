// A status state variable can hold the "Good" and "Bad" values and is initially "Good". It is defined in the following code:

const [status, setStatus] = useState('Good');

// What is the type given to status?

// How can its type be narrowed to only "Good" or "Bad"?

/** 
 SOLUTION
 *   type status wwill be set to string
 *  
 *  */
const [status, setStatus] = useState<'Good' | 'Bad'>('Good');

// 5. A FruitList component takes in an array of fruit names and displays them in a list. It is referenced in another component’s JSX as follows:
// <FruitList fruits={[“Banana”, “Apple”, “Strawberry”]} />;

// What type would you define for the Fruitlist component?
type Props = {
  fruits: string[];
};

/* 6. An email state variable can hold null or an email address and is initially null.
 How would you define this state using the useState hook?

*/

const [email, setEmail] = useState<null | string>(null);

// 7. The following component allows the user to agree:
//
//  What would you define as the type definition for Props?

export function Agree({ onAgree }: Props) {
  return <button onClick={() => onAgree()}>Click to agree</button>;
}

SOLUTION;
type Agree = {
  onAgree: () => void;
};
