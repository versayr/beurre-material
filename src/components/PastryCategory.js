import React, { Component }       from 'react';
import List                       from '@material-ui/core/List';
import ListItem                   from '@material-ui/core/ListItem';
import ListItemText               from '@material-ui/core/ListItemText';
import Collapse                   from '@material-ui/core/Collapse';
import ExpandLess                 from '@material-ui/icons/ExpandLess';
import ExpandMore                 from '@material-ui/icons/ExpandMore';
// import InputLabel              from '@material-ui/core/InputLabel';
// import Select                  from '@material-ui/core/Select';
// import SelectorDropdown        from './SelectorDropdown';
// import FormControl             from '@material-ui/core/Select';
// import MenuItem                from '@material-ui/core/MenuItem';
import TextField                  from '@material-ui/core/TextField';

class PastryCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      plain: 0
    };
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    return (
      <form>
        <ListItem button onClick={() => this.handleClick()}>
          <ListItemText primary={this.props.categoryName} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse 
          in={this.state.open} 
          unmountOnExit
        >
          <List 
            component="div" 
            disablePadding 
          >
            <ListItem>
              <TextField
                id="plain-croissants"
                label={this.props.categoryItems[0]}
                type="number"
                margin="dense"
                fullWidth
              />
            </ListItem>
            <ListItem>
              <TextField
                id="chocolate-croissants"
                label={this.props.categoryItems[1]}
                type="number"
                margin="dense"
                fullWidth
              />
            </ListItem>
            <ListItem>
              <TextField
                id="almond-croissants"
                label={this.props.categoryItems[2]}
                type="number"
                margin="dense"
                fullWidth
              />
            </ListItem>
            <ListItem>
              <TextField
                id="ham-croissants"
                label={this.props.categoryItems[3]}
                type="number"
                margin="dense"
                fullWidth
              />
            </ListItem>
          </List>
        </Collapse>
      </form>
    );
  }
}

export default PastryCategory;
