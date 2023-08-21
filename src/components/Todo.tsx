import { Todo as TodoType } from "../types"


interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>
    ) => void
}

export const Todo = ({ id, title, completed, onRemoveTodo, onComplete }: Props) => {
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={(event) => { onComplete({ id, completed: event.target.checked }) }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo(id) }}></button>


        </div>
    )
}