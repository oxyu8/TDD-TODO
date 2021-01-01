import * as React from 'react';

type InputProps = {
    type: string
    name: string
    placeholder: string
    value: string
    handleFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return (
        <div>
            <input
                className="input"
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.handleFunc}
            />
            <style jsx>
                {`
                    .input {
                        width: 200px;
                        height: 30px;
                    }
                `}
            </style>
        </div>
    )
}