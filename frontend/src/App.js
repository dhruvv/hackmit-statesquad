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
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const [message2, setMessage2] = useState('');

  const handleChange2 = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const [content, setContent] = useState('');


  const onClickHandler = (url) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: message})
      };
    fetch('http://127.0.0.1:5000/match?yt_id='+message+'&q='+message2)
          .then(response => response.json())
          .then(data => setContent(data));
  }
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
         <TextField fullWidth label="Enter URL here" id="youtubeID" onChange={handleChange} />
         <TextField fullWidth label="Enter URL here" id="youtubeID" onChange={handleChange2} />
          <IconButton aria-label="delete" style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}
          onClick={() => {onClickHandler("hello");} }
          >
            <SearchIcon  />
          </IconButton>
      </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
      </CardContent>
    </Card>
  </Box>
  );
}

export default App;
