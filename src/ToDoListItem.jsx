import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

export default function ToDoListItem({ todo,removeTodo,toggleTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={removeTodo} edge="end" aria-label="comments">
                    <DeleteIcon/>
                </IconButton>
            }
            disablePadding>
            <ListItemButton
                role={undefined}
                dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        onChange={()=>toggleTodo(todo.id)}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.Task} />
            </ListItemButton>
        </ListItem>
    );
}
