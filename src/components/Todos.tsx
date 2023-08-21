import { ListOfTodos, Todo as TodoType } from "../types"
import { Todo } from "./Todo"


interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
    onComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>
    ) => void
}
export const Todos = ({ todos, onRemoveTodo, onComplete }: Props) => {

    return (

        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    <Todo
                        onComplete={onComplete}
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo} />
                </li>
            )
            )}
        </ul>


    )
}