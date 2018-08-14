import React          from 'react';
import { 
  Paper,          
  LinearProgress,
  AppBar,
  Typography,
  List,
  TextField,
  Button
}                     from '@material-ui/core';
import './App.css';
import PastryCategory from './components/PastryCategory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, categories : [] };
  }

  componentDidMount() {
    fetch('/pastries')
      .then(res => res.json())
      .then(categories => this.setState({ 
        isLoaded: true,
        categories: categories 
      }));
  }

  render() {
    return (
      <Paper>
        <AppBar position="static">
          <Typography 
            variant="display2" 
            className="title"
            color="inherit" 
            align="center"
          >
            Beurre-Material
          </Typography>
        </AppBar>
        {!this.state.isLoaded && <LinearProgress align="center" />}
        <List>
          <form 
            method="post" 
            name="inventoryReport" 
            action="send"
          >
            {this.state.categories.map(function(category){
              return <PastryCategory
                key={category.name}
                categoryName={category.name}
                categoryItems={category.items}
              />;
            })}
            <TextField
              label="Need anything else?"
              inputProps={{ name: 'message' }}
              multiline
              fullWidth
              margin="dense"
              rowsMax="4"
            />
            <div className="button-surround">
              <Button 
                type="submit" 
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </div>
          </form>
        </List>
      </Paper>
    );
  }
}

export default App;
