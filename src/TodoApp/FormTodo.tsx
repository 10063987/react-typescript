import React from "react";

type FormProps = {
    text: string 
    handleSubmit: (event: React.SyntheticEvent) => void
    setText: (text: string) => void
}


const FormTodo = ({text, handleSubmit, setText}: FormProps) => {
    return (<>
        <form style={{background: 'pink', height: '100px', display: 'flex', justifyContent: "flex-start" , alignItems: 'center'}} onSubmit={handleSubmit}>
            <input
                style={{padding: '5px'}}
                placeholder="Todo"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </form>
    </>);
}
 
export default FormTodo;