import { Name } from './Person.types'


type ListProps = {
    list: Name[]
}

// How to work with an array of objects in React + Typescript
export const PersonList = (props: ListProps) => {
    return (<>
        <div>
            {props.list.map(item => (
                <h2>{item.first} {item.last}</h2>
            ))}
        </div>
    </>)
}