import React          from 'react';
import { 
  Paper,          
  LinearProgress,
  AppBar,
  Typography,
  List,
  TextField,
  Button
}                     from '@material-ui/core';
import './App.css';
import PastryCategory from './components/PastryCategory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoaded: false, 
      categories : [],
      formFields: {
        message: ''
      }
    };
  }

  componentDidMount() {
    fetch('/pastries')
      .then(res => res.json())
      .then(categories => this.setState({ 
        isLoaded: true,
        categories: categories 
      }))
      .then(this.state.categories.map( (category) => {
        category.items.map( (item) => {
          let formFields = Object.assign({ item: 0 }, this.state.formFields);
          this.setState({formFields: formFields})
        })
      }));
  }

  setFormValue = (value) => {
  }

  handleSubmit(event) {
    event.preventDefault();
    //    const body = new FormData(this.form);
    //    fetch('/send', { method: 'post', body })
    //      .then(res => res.json())
    //      .then(data => alert(JSON.stringify(data, null, '\t')));
  }

  render() {
    return (
      <Paper>
        <AppBar position="static">
          <Typography 
            variant="display2" 
            className="title"
            color="inherit" 
            align="center"
          >
            Beurre-Material
          </Typography>
        </AppBar>
        {!this.state.isLoaded && <LinearProgress align="center" />}
        <List>
          <form 
            onSubmit={this.handleSubmit}
            name="inventoryReport" 
          >
            {this.state.categories.map(function(category){
              return <PastryCategory
                key={category.name}
                category={category}
              />;
            })}
            <TextField
              label="Need anything else?"
              value={this.state.formFields.message}
              onChange={event => this.setState({ formFields: {message: event.target.value}})}
              multiline
              fullWidth
              margin="dense"
              rowsMax="4"
            />
            <div className="button-surround">
              <Button 
                type="submit" 
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </div>
          </form>
        </List>
      </Paper>
    );
  }
}

export default App;
