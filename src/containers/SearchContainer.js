import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (video) => {
      dispatch(handleSearchChange(video));
    }
  };
};

const SearchContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
