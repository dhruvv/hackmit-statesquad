import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Card>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
         <TextField fullWidth label="Enter URL here" id="youtubeID" />
         <IconButton aria-label="delete" style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
            <SearchIcon  />
          </IconButton>
      </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Please enter a URL!
          </Typography>
      </CardContent>
    </Card>
  </Box>
  );
}

export default App;
