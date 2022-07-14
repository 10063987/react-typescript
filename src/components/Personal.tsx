
type PersonalData = {
    data : {
        name: string
        age: number
    }
}

export const Personal = (props: PersonalData) => {
    return (<>
    <h2>{props.data.name} - {props.data.age}</h2>
    </>)
}

