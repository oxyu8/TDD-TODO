type ButtonProps = {
    text: string,
    handleFunc: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.handleFunc}>{props.text}</button>
    )
}