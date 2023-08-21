import React, { useState } from "react"

interface Props {
    saveTodo: (title: string) => void
}

export const CreateTodo = ({ saveTodo }: Props) => {

    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        saveTodo(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                onKeyDown={() => { }}
                placeholder="¿Qué quieres hacer?"
                autoFocus />
        </form>
    )
}