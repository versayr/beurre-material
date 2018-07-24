import React, { Component } from 'react';
import List                 from '@material-ui/core/List';
import ListItem             from '@material-ui/core/ListItem';
import ListItemText         from '@material-ui/core/ListItemText';
import Collapse             from '@material-ui/core/Collapse';
import ExpandLess           from '@material-ui/icons/ExpandLess';
import ExpandMore           from '@material-ui/icons/ExpandMore';
import InputLabel           from '@material-ui/core/InputLabel';
import Select               from '@material-ui/core/Select';

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

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <ListItem button onClick={() => this.handleClick()}>
          <ListItemText primary="Croissants" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <InputLabel htmlFor="age-native-simple">Plain Croissants</InputLabel>
              <Select
                native
                value={this.state.age}
                onChange={this.handleChange('age')}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option value="" />
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </Select>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Blueberry Lemon" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Rosemary Parmesan" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Butterscotch" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

export default PastryCategory;
