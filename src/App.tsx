import React from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY as string;

const search = (query: string, key: string = '') => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURIComponent(query)}`)
        .then(response => response.json());
}

function App() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleSearch = React.useCallback((text: string) => {
        setLoading(true);
        search(text, API_KEY)
            .then((results) => {
                setData(results.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <SearchInput onChange={handleSearch} />
            {loading ? <p>Searching...</p> : <SearchResults data={data} />}
        </div>
    );
}

export default App;
