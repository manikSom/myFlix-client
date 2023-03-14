import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/reducers/movies';

export const MoviesFilter = () => {
    const filter = useSelector((state) => state.movies.filter);
    const dispatch = useDispatch();
    return (
        <Form.Control
            type='text'
            placeholder='Search...'
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
        />
    );
};