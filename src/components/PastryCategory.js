import React, { Component } from 'react';
import List                 from '@material-ui/core/List';
import ListItem             from '@material-ui/core/ListItem';
import ListItemText         from '@material-ui/core/ListItemText';
import Collapse             from '@material-ui/core/Collapse';
import ExpandLess           from '@material-ui/icons/ExpandLess';
import ExpandMore           from '@material-ui/icons/ExpandMore';

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
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Chocolate Orange" />
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
