import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from './ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: process.env.REACT_APP_apiKey,
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    const { apiKey, amount, apiUrl, searchText } = this.state;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => {
    const { apiKey, amount, apiUrl, searchText } = this.state;
    this.setState({ amount: value }); 
      axios
    .get(
      `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
    )
    .then(res => this.setState({ images: res.data.hits }))
  }

  render() {
    const { searchText, amount, images } = this.state;
    return (
      <div>
        <TextField
          name="searchText"
          value={searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {images.length > 0 ? (
          <ImageResults images={images} />
        ) : null}
      </div>
    );
  }
}

export default Search;