import React, { Component }       from 'react';
import PropTypes from 'prop-types';
import { 
  List,                       
  ListItem,                   
  ListItemText,               
  Collapse,                   
  TextField 
}                                 from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

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
        >
          <List 
            component="div" 
            disablePadding 
          >
            {this.props.categoryItems.map(function(name){
              return (
                <ListItem key={name}>
                  <TextField
                    inputProps={{ min: '0' }} 
                    id={name}
                    label={name}
                    type="number"
                    margin="dense"
                    fullWidth
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </form>
    );
  }
}

PastryCategory.propTypes = {
  categoryName: PropTypes.string,
  categoryItems: PropTypes.array
};


export default PastryCategory;
