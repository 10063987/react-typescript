type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {

    return (<>
        <div style={{background: 'salmon', width: '90%', margin: 'auto', borderRadius: '5px', }}>
            <h2 >This is the prop.children: </h2>
            <p>{props.children}</p>
        </div>
    </>)
}