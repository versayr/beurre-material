import React from 'react';
import Select from '@material-ui/core/Select';

const SelectorDropdown = () => {
  const handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  return (
    <Select
      native
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
  );
};

export default SelectorDropdown;
