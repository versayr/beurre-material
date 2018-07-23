import React          from 'react';
import PropTypes      from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import ListSubheader  from '@material-ui/core/ListSubheader';
import List           from '@material-ui/core/List';
import ListItem       from '@material-ui/core/ListItem';
import ListItemIcon   from '@material-ui/core/ListItemIcon';
import ListItemText   from '@material-ui/core/ListItemText';
import Collapse       from '@material-ui/core/Collapse';
import ExpandLess     from '@material-ui/icons/ExpandLess';
import ExpandMore     from '@material-ui/icons/ExpandMore';
import PastryCategory from './components/PastryCategory';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
