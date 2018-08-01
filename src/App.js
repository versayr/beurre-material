import React          from 'react';
import { 
  Paper,          
  AppBar,
  Typography,
  List,
  Button
}                     from '@material-ui/core';
import './App.css';
import PastryCategory from './components/PastryCategory';

class App extends React.Component {
  state = { categories : require('./data/PastryData.json') };

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
        <List>
          <form method="post" name="inventoryReport" action="form-to-email.php">
            {this.state.categories.map(function(category){
              return <PastryCategory
                categoryName={category.name}
                categoryItems={category.items}
              />
            })}
            <Button 
              type="submit" 
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </List>
      </Paper>
    );
  }
}

export default App;
