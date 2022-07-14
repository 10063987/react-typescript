import Button from "./Button";

const Todo = ({todo, deleteTodo, updateTodo}) => {
    return (<>
        <li key={todo.id} style={{ background: 'lightgray', borderRadius: '5px', padding: '5px', marginBottom: '15px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {todo.title}
            <Button id={todo.id} todo={todo} callback={deleteTodo} label='Delete' style={{ background: 'red', border: 'none', color: 'white', padding: '8px' }}/>
            <Button id={todo.id} todo={todo} callback={updateTodo} label='Update' style={{ background: 'lightgreen', border: 'none', color: 'white', padding: '8px' }} />
        </li>
    </>);
}
 
export default Todo;