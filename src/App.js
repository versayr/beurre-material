import React          from 'react';
import { 
  Paper,          
  AppBar,
  Typography,
  List
} from '@material-ui/core';

import PastryCategory from './components/PastryCategory';

class App extends React.Component {
  state = { categories : [
    { name : 'Croissants',
      items : [ 
        'Plain Croissants', 
        'Chocolate Croissants', 
        'Almond Croissants', 
        'Ham Croissants' 
      ]
    }, {
      name : 'Muffins',
      items : [
        'Blueberry Muffins',
        'Morning Glory Muffins',
        'Raspberry Orange Muffins',
        'Banana Walnut Muffins'
      ]
    }, {
      name : 'Scones',
      items : [
        'Blueberry Lemon Scone',
        'Chocolate Orange Scone',
        'Butterscotch Scone',
        'Rosemary Parmesan Scone'
      ]
    }
  ] };

  render() {
    return (
      <Paper>
        <AppBar position="static">
          <Typography 
            variant="display1" 
            color="inherit" 
            gutterBottom
          >
            Beurre-Material
          </Typography>
        </AppBar>
        <List>
          <PastryCategory 
            categoryName={this.state.categories[0].name} 
            categoryItems={this.state.categories[0].items}
          />
          <PastryCategory 
            categoryName={this.state.categories[1].name} 
            categoryItems={this.state.categories[1].items}
          />
          <PastryCategory 
            categoryName={this.state.categories[2].name} 
            categoryItems={this.state.categories[2].items}
          />
        </List>
      </Paper>
    );
  }
}

export default App;
