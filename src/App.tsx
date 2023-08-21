import { useState } from "react"
import { Todos } from "./components/Todos";
import { type ListOfTodos, Todo as TodoType, FilterValue } from "./types";
import { Footer } from "./components/Footer";
import { TODO_FILTERS } from "./consts";
import { Header } from "./components/Header";



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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleReove = (id: string) => {
    const newtodos = toDos.filter(todo => todo.id !== id);
    setTodos(newtodos);
  }
  const onClearCompleted = () => {
    const newtodos = toDos.filter(todo => todo.completed !== true);
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

  const handleFilterChange = (filter: FilterValue) => { setFilterSelected(filter) }

  const filteredTodos = toDos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: string) => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title: title,
      completed: false

    }
    const newTodos = [...toDos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Header addTodo={handleAddTodo} />
      <Todos

        onComplete={handleCompleted}
        onRemoveTodo={handleReove}
        todos={filteredTodos} />
      <Footer
        activeCount={toDos.filter(todo => !todo.completed).length}
        completedCount={toDos.length - toDos.filter(todo => !todo.completed).length}
        onClearCompleted={onClearCompleted}
        filterSelected={filterSelected}
        handelFilterChange={handleFilterChange} />
    </div>
  )
}

export default App
