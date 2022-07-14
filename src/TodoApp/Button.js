const Button = ({callback, id, todo, label, style}) => {
    return (<>
        <button style={style} onClick={() => {
            console.log(callback)
            callback(id, todo)
        }}>
            {label}
        </button>
    </>);
}
 
export default Button;