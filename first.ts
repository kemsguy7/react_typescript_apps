// Object type
type User = {
  name: string
  age: number
  isAdmin: boolean
  id: string | number
}

let user: User // variable of type User

// Array type
let hobbies: Array<string>

hobbies = ['Sports', 'Cooking', 'Reading']

//definfing custom type
type AddFn = (a: number, b: number) => number

// Function type
function add(a: number, b: number): number {
  // return void if no return value
  const result = a + b
  return result
}

function calculate(
  a: number,
  b: number,
  calcFn: AddFn // third parameter is a function that takes two numbers and returns a number : gotten from the type AddFn defined above
) {
  calcFn(a, b) // call the function
}

calculate(10, 20, add)

// Defining object types with interfaces
interface Credentials {
  password: string
  email: string
}

let creds: Credentials

creds = {
  password: 'abc',
  email: 'matt@gmail.com',
}

class AuthCredentials implements Credentials {
  email: string
  password: string
  userName: string
}
