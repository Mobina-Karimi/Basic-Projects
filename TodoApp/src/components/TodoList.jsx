import styles from "./TodoList.module.css"
import TodoItem from "./TodoItem";

function TodoList({todos, deleteHandler,checkedItems,setCheckedItems}) {
  return (
    <div className={styles.tdlContainer}>
        <h2>Todo List</h2>
        {todos.length ? (
          <ul className={styles.tdl}>
            {todos.map((todo) =>
              (<TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>)
            )}
          </ul>):
          (<p className={styles.message}>No Todos Yet!</p>)
        }
    </div>
  )
}

export default TodoList