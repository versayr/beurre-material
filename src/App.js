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
    }, {
      name : 'Cookies',
      items : [
        'Chocolate Chunk Cookies',
        'Oatmeal Raisin Cookies',
        'Reese\'s Peanut Butter Cookies'
      ]
    }, {
      name : 'Cupcakes',
      items : [
        'Simon Cupcakes',
        'Milly Cupcakes',
        'Madison Cupcakes',
        'Harriet Cupcakes',
        'Dexter Cupcakes',
        'Red Velvet Cupcakes',
        'Seasonal Cupcakes'
      ]
    }, {
      name : 'Brownies & Blondies',
      items : [
        'Flourless Fudge Brownies',
        'Sweet Potato Blondies'
      ]
    }, {
      name : 'Other AM Pastries',
      items : [
        'Coffee Cake Slices',
        'Pecan Sticky Buns',
        'Buttery Buns of the Day',
        'Buttery Biscuit'
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
          {this.state.categories.map(function(category){
            return <PastryCategory
                categoryName={category.name}
                categoryItems={category.items}
              />
          })}
        </List>
      </Paper>
    );
  }
}

export default App;
