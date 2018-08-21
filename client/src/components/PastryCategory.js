import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { 
  List,                       
  ListItem,                   
  ListItemText,               
  Collapse,                   
  TextField 
}                                 from '@material-ui/core';

class PastryCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  expandToggle() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    let name = this.props.category.name;
    let items = this.props.category.items;

    return (
      <div>
        <ListItem button onClick={() => this.expandToggle()}>
          <ListItemText primary={name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} >
          <List 
            component="div" 
            disablePadding 
          >
            {items.map(function(item){
              return (
                <ListItem key={item}>
                  <TextField
                    inputProps={{ 
                      min: '0', 
                      type: 'number',
                      name: item.toString(),
                    }} 
                    id={item}
                    label={item}
                    margin="dense"
                    fullWidth
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </div>
    );
  }
}

PastryCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  })
};


export default PastryCategory;
