import { CreateTodo } from "./CreateTodo"

interface Props {
    addTodo: (title: string) => void
}

export const Header = ({ addTodo }: Props) => {


    return (
        <header className="header">
            <h1>ToDo <img
                style={{ width: '60px', height: 'auto' }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1920px-Typescript.svg.png' />
            </h1>
            <CreateTodo saveTodo={addTodo} />

        </header>
    )
}