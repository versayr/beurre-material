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
  constructor(props) {
    super(props);
    this.state = { categories : require('./data/PastryData.json') };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
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
        <List>
          <form name="inventoryReport" onSubmit={this.handleFormSubmit}>
            {this.state.categories.map(function(category){
              return <PastryCategory
                key={category.name}
                categoryName={category.name}
                categoryItems={category.items}
              />;
            })}
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
        <div className="results">
          <Typography 
            color="inherit" 
            align="center" 
            variant="display1"
          >
            Form Results
          </Typography>
          <pre className="results-wrapper"><code className="results-display"></code></pre>
        </div>
      </Paper>
    );
  }
}

export default App;
