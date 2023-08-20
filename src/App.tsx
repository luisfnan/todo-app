import { useState } from "react"
import { Todos } from "./components/Todos";
import { type ListOfTodos, Todo as TodoType } from "./types";



const mockTodos: ListOfTodos = [
  {
    id: "1",
    title: "Aprender react",
    completed: false
  },
  {
    id: "2",
    title: "login y autenticacion",
    completed: false
  },
  {
    id: "3",
    title: "clases el lunes",
    completed: true
  }
]


function App(): JSX.Element {

  const [toDos, setTodos] = useState(mockTodos);

  const handleReove = (id: string) => {
    const newtodos = toDos.filter(todo => todo.id !== id);
    setTodos(newtodos);
  }
  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ) => {
    const newTodos = toDos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">

      <Todos

        onComplete={handleCompleted}
        onRemoveTodo={handleReove}
        todos={toDos} />
    </div>
  )
}

export default App
