import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = (state) => ({ handleSearchInputChange: state.handleSearchInputChange });

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (value) => {
      dispatch(handleSearchChange(value));
    }
  };
};

const SearchContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
