import { useReducer } from "react";

const initialState = () => ({
    count: 0
})

const counterReducer = (state = initialState(), action = {}) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 } 
        case 'RESET':
            return { ...state, count: 0 }
        default:
            return state
    }
        
    return state
}

const CounterApp = () => {

    const [state, counterDispatch] = useReducer(counterReducer, counterReducer())


    return (<>
        <div>
            <h1>Clicks: {state.count}</h1>
            
            <button onClick={() => {
                counterDispatch({type: 'INCREMENT'})
            }}>
                Increment
            </button>
            <button onClick={() => {
                counterDispatch({type: 'DECREMENT'})
            }} >
                Decrement
            </button>
            <button onClick={() => {
                counterDispatch({type: 'RESET'})
            }}>
                Reset
            </button>
        </div>
    </>);
}
 
export default CounterApp;