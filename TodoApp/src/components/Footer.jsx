import styles from "./Footer.module.css";

function Footer({ todos, applyFilter ,checkedItems,setTodos}) {
  const unCheckedItemsCount = todos.filter((todo) => !checkedItems[todo.id]).length;

    const deleteCompletedHandler = () => {
    const incompleteTodos = [];
    todos.forEach((todo) => {
      if (!checkedItems[todo.id]) {
        incompleteTodos.push(todo);
      }
    });
    setTodos(incompleteTodos); 
    };

  return (
    <div className={styles.container}>
      <span>{unCheckedItemsCount} item left</span>
      <div>
        <button onClick={() => applyFilter("all")}>All</button>
        <button onClick={() => applyFilter("active")}>Active</button>
        <button onClick={() => applyFilter("completed")}>Completed</button>
      </div>
      <button onClick={deleteCompletedHandler}>Clear completed</button>
    </div>
  );
}

export default Footer;
