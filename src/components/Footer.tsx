import { FilterValue } from "../types"
import { Filter } from "./Filter"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handelFilterChange: (filter: FilterValue) => void
}
export const Footer = ({
    activeCount = 0,
    completedCount = 0,
    onClearCompleted,
    filterSelected,
    handelFilterChange }: Props) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount} {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}</strong>
            </span>

            <Filter
                filterSelected={filterSelected}
                onFilterChange={handelFilterChange} />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}>
                        borrar completados
                    </button>
                )
            }

        </footer>
    )
}