import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import { ListItem } from "@mui/material";

export default function AddTodoList({ addTodo }) {
    const [todo, setTodo] = useState("");
    const [isValid, setIsValid] = useState(true); 

    const handleChange = (evt) => {
        setTodo(evt.target.value);
        setIsValid(true); 
    };

    const submit = () => {
        if (todo.trim() === "") {
            setIsValid(false); 
        } else {
            addTodo(todo);
            setTodo("");
            setIsValid(true); 
        }
    };

    return (
        <ListItem>
            <TextField
                onChange={handleChange}
                value={todo}
                id="filled-basic"
                label="Task"
                helperText={!isValid && "Please enter a task"}
                error={!isValid}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <Button onClick={submit} variant="contained">
                <AddIcon />
            </Button>
        </ListItem>
    );
}
