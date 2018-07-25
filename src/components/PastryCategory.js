import React, { Component } from 'react';
// import List                 from '@material-ui/core/List';
import ListItem             from '@material-ui/core/ListItem';
import ListItemText         from '@material-ui/core/ListItemText';
import Collapse             from '@material-ui/core/Collapse';
import ExpandLess           from '@material-ui/icons/ExpandLess';
import ExpandMore           from '@material-ui/icons/ExpandMore';
import InputLabel           from '@material-ui/core/InputLabel';
import Select               from '@material-ui/core/Select';
// import SelectorDropdown     from './SelectorDropdown';
import FormControl          from '@material-ui/core/Select';

class PastryCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    return (
      <div>
        <ListItem button onClick={() => this.handleClick()}>
          <ListItemText primary="Croissants" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <FormControl>
            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
              native
              inputProps={{
                name: 'age',
                id: 'age-native-simple',
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>          
        </Collapse>
      </div>
    );
  }
}

export default PastryCategory;
