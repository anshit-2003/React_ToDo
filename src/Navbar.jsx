import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Task List
                    </Typography>
                    <a href="https://github.com/anshit-2003/React_ToDo">
                        <Button color="inherit">
                            <GitHubIcon />
                        </Button>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
