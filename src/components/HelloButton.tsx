export const HelloButton = (props) => {
    return (
        <button onClick={props.handleFunc}>{props.text}</button>
    )
}