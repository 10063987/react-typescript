import { useReducer } from "react"

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT'
    payload: number
}

type ResetAction = {
    type: 'RESET'
}

type CounterAction = UpdateAction | ResetAction

const intialState = { 
    count: 0
}

const counterReducer = (state: CounterState = intialState, action: CounterAction ) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload }
        case 'DECREMENT':
            return { count: state.count - action.payload }
        case 'RESET': 
            return intialState
        default:
            return state
    }

}

export const Counter = () => {
    const [state, counterDispatch] = useReducer(counterReducer, intialState)


    return (<>
        Count: {state.count}
        <button onClick={() => counterDispatch({ type: 'INCREMENT', payload: 10})}>
            Increment 10
        </button>
        <button onClick={() => counterDispatch({ type: 'DECREMENT', payload: 10})}>
            Decrement 10
        </button>
        <button onClick={() => counterDispatch({ type: 'RESET' })}>
            Reset
        </button>
    </>)
}
