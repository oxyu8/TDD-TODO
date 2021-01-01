import React, { useState, useEffect, useRef } from "react"

export const TodoForm = (props) => {
    const [input, setInput] = useState<string>(props.edit ? props.edit.value : "");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="update your item"
                    value={input}
                    name="text"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button">Add todo</button>
            </>
            ) :
            (
            <>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="add a todo"
                    value={input}
                    name="text"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button">Add todo</button>
            </>
            )
            }

        </form>
    )
}