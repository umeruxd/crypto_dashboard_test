import React, { useState } from 'react';
import SearchIcon from 'components/icons/search';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { searchCall } from 'features/general/generalSlice';

import './search.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = e => {
    dispatch(searchCall(searchTerm));
  };
  return (
    <div className="search-wrap">
      <Form.Group
        controlId="searchGlobal"
        className="search-group d-flex align-items-center"
      >
        <Form.Control
          label="searchGlobal"
          name="searchGlobal"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <span onClick={e => handleOnChange()}>
          <SearchIcon />
        </span>
      </Form.Group>
    </div>
  );
};

export default Search;
