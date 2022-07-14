
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person/Person';
import { PersonList } from './components/PersonList';
import { Personal } from './components/Personal';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { User } from './components/state/User';
import CounterApp from './CounterApp/CounterApp';
import TodoApp from './TodoApp/TodoApp';
import { Counter } from './components/state/Counter';
import MyComponent from './components/MyComponent';
 

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const namelist = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  const obj = {
    name: 'Luis',
    age: 29
  }


  return (
    <div className="App">
      {
        /**
         * We pass three props to <Greet />
         * Now in the <Greet /> we need to set the type of props 
         * 
         * type GreetProps = {
         *  name: string
         *  messageCount: number
         *  isLoggedIn: boolean
         * }
         * 
         * const Greet = (props: GreetProps) => {
         *  . . .
         * }
         * 
         */
      }
      <Greet name='Luis' messageCount={10} isLoggedIn={true} />


      {/**
       * Props can be optional. That way the <Greet /> can have just two props instead of three
       * 
       * We set the props as optional with the '?' sign before the type asignment
       * 
       * type GreetProps = {
       *  name: string
       *  messageCount?: number
       *  isLoggedIn?: boolean
       * } 
       * 
       */}
      <Greet name='Luis' messageCount={10} />



      {/**
         * We can pass an object to a component
         * 
         * const personName = {
         *  first: 'Bruce',
         *  last: 'Wayne'
         * }
         * 
         * ...And in <Person /> import 
         * 
         * import { PersonProps } from './Person.types'  which in turn is
         * 
         * export type PersonProps = {
         *  name: Name
         * }
         * 
         * export type Name = {
         *  first: string
         *  last: string
         * }
         * 
         * export const Person = (props: PersonProps) => {
         *  . . . 
         * }
         * 
         * 
         */}
      <Person name={personName} />

      {
        /**
         * We can pass an array of objects like:
         * 
         * const nameList = [
         * { first: 'Bruce', last: 'Wayne'},
         * { first: 'Clark', last: 'Kent'},
         * { first: 'Princess', last: 'Diana'},
         * ]
         * 
         * ...And reuse  
         *  import { Name } from '../components/Person/Person.types'
         * 
         * 
         * type ListProps = {
         *  list: Name[]
         * }
         * 
         * const PersonList = (props: ListProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <PersonList list={namelist} />

      {
        /**
         * We can pass a simple object as a prop
         * 
         * const obj = {
         *  name: 'Luis',
         *  age: 20
         * }
         * 
         * ...And in the <Personal />
         * 
         * type PersonalData = {
         *  data: {
         *    name: string
         *    age: number
         *  }
         * }
         * 
         * export const Personal = (props: PersonalData) => {
         *  . . . 
         * }
         * 
         */
      }
      <Personal data={obj} />


      {
        /**
         * We can pass a single prop and only accept certain values like 'success' | 'loading' | 'error'
         * 
         * ...And based on that value render whatever we want
         * 
         * type StatusProps = {
         *  status: 'success' | 'loading' | 'error'
         * }
         * 
         * ...And in the <Success />
         * 
         * export const Status = (props: StatusProps) =>{
         *  . . . 
         * }
         */
      }
      <Status status='success' />


      {
        /**
         *  We can pass text as a child to a component
         * 
         * ...And in the <Heading />
         * 
         * 
         * type HeadingProps = {
         *  children: string
         * }
         * 
         * export const Heading = (props: HeadingProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <Heading>
        This is a text in a Heading component as a child
      </Heading>

      {
        /**
         * We can pass a component as a child to a component
         * In this case the children won't be of type string
         * 
         * ...And in the <Oscar />
         * 
         * type OscarProps = {
         *  children: React.ReactNode
         * }
         * 
         * export const Oscar = (props: OscarProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <Oscar>
        <Heading>
          This is a text in a Heading component that is in a Father Component
        </Heading>
      </Oscar>

      {
        /**
         * One of the common props between components are the events
         * We cna pass events as props
         * 
         * ...And in <Button />
         * 
         * type ButtonProps = {
         *  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
         * }
         * 
         * export const Button = (props: ButtonProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <Button handleClick={(event, id) => {
        console.log(`Button clicked: ${id}`, event)
      }} />

      {
        /**
         * More complex props is a mix of events and state
         * value={''} and handleChange={(event) => console.log('Input typed:', event.rarget.value)}
         * 
         * 
         * ...And in <Input />
         * 
         * type InputProps = {
         *  value: string
         *  handleChange: (event: React.ChangeEvent<HTMLInputElement>) = void
         * }
         * 
         * export const Input = ({value, handleChange}: InputProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <Input value={''} handleChange={(event) => {
        console.log(`Input typed: `, event.target.value)
      }} />

      {
        /**
         * We can pass styles which is an object, but since its a style object it has its own type
         * 
         * ...And in <Container />
         * 
         * 
         * type ContainerProps = {
         *  styles: React.CSSProperties
         * }
         * 
         * export const Container = (props: ContainerProps) => {
         *  . . . 
         * }
         * 
         */
      }
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />



      {/* ---------------------------- useState hook ---------------------------- */}
      {
        /**
         * What about MANAGEING STATE inside a CUSTOM COMPONENT
         * 
         * Here we don't have any prop, but inside this component que manage state what HAS TO BE TYPED
         * 
         * 
         * ...In <User />
         * 
         * 
         * type AuthUser = {
         *  name: string
         *  email: string
         * }
         * 
         *  const [user, setUser] = useState<AuthUser>({} as AuthUser)
         * 
         *  setUser({ name: 'Luis', email: 'luis@gmail.com' })
         * 
         *  setUSer({} as AuthUser)
         * 
         */
      }
      <User />


      {/* JS => TypeScript  */}
      {/* -------------------- useReducer HOOK -------------------- */}
      <Counter />

      <CounterApp />

      <TodoApp />



      {/* -------------------- useContext + useReducer -------------------- */}
      <MyComponent />
    </div>
  );
}

export default App;
