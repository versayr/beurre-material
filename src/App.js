import React          from 'react';
import { 
  Paper,          
  AppBar,
  Typography,
  List
} from '@material-ui/core';

import PastryCategory from './components/PastryCategory';

class App extends React.Component {
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
          <PastryCategory />
        </List>
      </Paper>
    );
  }
}

export default App;
