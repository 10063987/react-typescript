import Todo from "./Todo";

type TodoState = {
    id: number
    title: string
}[]

type ListProps = {
    todos: TodoState
    deleteTodo: (id: number) => void
    updateTodo: (id: number, todo: []) => void
    style: React.CSSProperties
}


const TodoList = ({ todos, deleteTodo, updateTodo,  style }: ListProps) => {
    return (<>
        <ul style={style}>
            {todos.map(todo => (
                <Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </ul>
    </>);
}
 
export default TodoList;
