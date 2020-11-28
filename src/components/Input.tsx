type InputProps = {
    type: string
    name: string
    handleFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return (
        <input type={props.type} name={props.name} onChange={props.handleFunc}/>
    )
}