import React          from 'react';
import Paper          from '@material-ui/core/Paper';
import ListSubheader  from '@material-ui/core/ListSubheader';
import List           from '@material-ui/core/List';
import PastryCategory from './components/PastryCategory';

class App extends React.Component {
  render() {
    return (
      <div>
        <Paper>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Beurre-Material</ListSubheader>}
          >
            <PastryCategory />
            <PastryCategory />
            <PastryCategory />
            <PastryCategory />
          </List>
        </Paper>
      </div>
    );
  }
}

export default App;
