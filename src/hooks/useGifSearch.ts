import React from 'react';
import { search } from '../services/gifService';

const API_KEY = process.env.REACT_APP_API_KEY as string;

interface State {
    data: any[];
    loading: boolean;
}

const reducer = (state: State, action: any) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.value };
        case 'SET_DATA':
            return {...state, loading: false, data: action.value };
    }
    return state;
}

export const useGifSearch = (query: string) => {
    const [state, dispatch] = React.useReducer(reducer, {
        data: [],
        loading: false
    });

    const { data, loading } = state;

    React.useEffect(() => {
        dispatch({ type: 'SET_LOADING', value: true });
        search(query, API_KEY)
            .then((results) => {
                dispatch({ type: 'SET_DATA', value: results.data });
            });
    }, [query]);

    return { data, loading };
};

// react-query