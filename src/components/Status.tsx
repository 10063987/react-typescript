
type StatusProps = {
    status: 'loading' | 'error' | 'success'
}

export const Status = (props: StatusProps) => {

    let message
    if (props.status === 'success') message = 'Data fetched successfully'
    if (props.status === 'error') message = 'Data fetched successfully'
    if (props.status === 'loading') message = 'Data fetched successfully'

    return (<>
        <div>
            <h2>Status: {message}</h2>
        </div>
    </>)
}