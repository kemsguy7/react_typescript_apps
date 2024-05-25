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

class AuthCrendentials implements Credentials {
  email: string
  password: string
  userName: string
}

function login(credentials: Credentials) {}

login(new AuthCrendentials())

// Being specific with Literal types
interface Admin {
  permissions: string[]
}

interface AppUser {
  userName: string
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin

admin = {
  permissions: ['login'],
  userName: 'matt',
}

type Role = 'admin' | 'user' | 'editor'

let role: Role

// Meriging Types
role = 'admin'
role = 'user'
role = 'editor'

// Adding type guards
function performAction(action: string | number, role: Role) {
  if (role == 'admin' && typeof action === 'string') {
  }
}

// Generic types
type DataStorage<T> = {
  storage: T[]
  add: (data: T) => void
}

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data)
  },
}

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
}

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  }
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: 'Matt' },
  { age: 24 }
)
