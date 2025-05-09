import { useState } from "react"
import styles from "./Todo.module.css"
import { v4 } from "uuid"
import TodoList from "./TodoList"
import Footer from "./footer"


function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [alert , setAlert] = useState("")
    const [checkedItems, setCheckedItems] = useState({});
    const [filteredTodos, setFilteredTodos] = useState([]);

    const changeHandler = (event) => {
        setTodo(event.target.value)
    } 
    const AddHandler = (event) =>{
      if(!todo){
        setAlert("Please enter what needs to be done!")
        return
      }
      setAlert("")

      const newTodo = { text: todo, id: v4() }
      setTodos((todos) => ([...todos, newTodo]))
      setTodo("")
    }

    const deleteHandler = (id) =>{
      const newTodos =  todos.filter((todo) => (todo.id !== id))
      setTodos(newTodos)
    }

    const applyFilter = (filterType) => {
      if (filterType === "all") {
        setFilteredTodos(todos); // همه آیتم‌ها
      } else if (filterType === "active") {
        
        setFilteredTodos(activeTodos); // فقط آیتم‌های فعال (چک‌نشده)
      } else if (filterType === "completed") {
        const completedTodos = todos.filter((todo) => checkedItems[todo.id]);
        setFilteredTodos(completedTodos); // فقط آیتم‌های کامل (چک‌شده)
      }
    };
    
  return (
    <>
      <div className={styles.container}>
          <div className={styles.header}>
            <h1>Todos</h1>
          </div>
         <div className={styles.text}>
           <input type="text" name="todo" id="todo" placeholder="What needs to be done?" value={todo} onChange={changeHandler}/>
           <button onClick={AddHandler}>Add</button>
         </div>
         <div className={styles.alert}>
         {alert && <p>{alert}</p>}
        </div>
        <TodoList 
          todos={filteredTodos.length > 0 ? filteredTodos : todos} 
          deleteHandler={deleteHandler} 
          checkedItems={checkedItems} 
          setCheckedItems={setCheckedItems} 
        />
        <Footer 
          todos={todos} 
          applyFilter={applyFilter} 
          checkedItems={checkedItems} 
          setTodos={setTodos}
        />
      </div>
    </>
  )
}

export default Todo