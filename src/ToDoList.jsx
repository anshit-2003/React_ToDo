import { v4 as uuid } from "uuid";
import "./ToDoList.css"
import List from "@mui/material/List";
import { useEffect, useState } from "react";
import ToDoListItem from "./ToDoListItem";
import AddTodoList from "./AddToDoList";

const getTodos = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
};

export default function CheckboxList() {
    const [todos, setTodos] = useState(getTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const removeTodo = (delete_id) => {
        setTodos((todos) => {
            return todos.filter((todo) => todo.id !== delete_id);
        });
    };
    const toggleTodo = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed: !todo.completed };
                }
                return { ...todo };
            })
        );
    };
    const addTodo = (todo) => {
        const new_task = { id: uuid(), Task: todo, completed: false };
        setTodos((prevtodos) => [...prevtodos, new_task]);
    };
    return (
        <div className="container">
            <div>
                <h1>ToDo :</h1>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}>
                {todos.map((value) => (
                    <ToDoListItem
                        toggleTodo={toggleTodo}
                        removeTodo={() => removeTodo(value.id)}
                        key={value.id}
                        todo={value}
                    />
                ))}
            </List>
            <AddTodoList addTodo={addTodo} />
            </div>
            
        </div>
    );
}
