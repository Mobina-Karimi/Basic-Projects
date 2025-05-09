import styles from "./TodoItem.module.css"

function TodoItem({todo,deleteHandler,checkedItems,setCheckedItems}) {    
    const checkedHandler = (id) => {
      setCheckedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // تغییر وضعیت چک شدن
      }));
    };
  return (
    <li key={todo.id} className={`${styles.item} ${checkedItems[todo.id] ? styles.checked : ""}`}>
        <input 
            type="checkbox" 
            name="todoSelection" 
            className={styles.checkBox} 
            onChange={() => checkedHandler(todo.id)}
            checked={!!checkedItems[todo.id]}
        />
        {todo.text}
        <button onClick={() => (deleteHandler(todo.id))}>Delete</button>
    </li>
  )
}

export default TodoItem