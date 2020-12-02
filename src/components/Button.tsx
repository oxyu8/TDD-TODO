import * as React from 'react';

type ButtonProps = {
    text: string,
    value: {
        email: string,
        password: string | number,
    }
    handleFunc: () => void
}

export const Button = (props: ButtonProps) => {
    const canPress = (): boolean => {
        if (props.value.email == '' && props.value.password == '') {
            return true
        } else {
            return false
        }
    }
    return (
        <>
            <button className='button' onClick={props.handleFunc} disabled={canPress()}>{props.text}</button>
            <style jsx>
                {`
                .button {
                    width: 100px;
                    height: 30px;
                    border-radius: 20px;
                    color: #fff;
                    background: #000;
                    border-color: #000;
                }
                `}
            </style>
        </>
    )
}