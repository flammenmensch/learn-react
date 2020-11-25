import React from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import { useGifSearch } from './hooks/useGifSearch';
import { useTheme } from './components/ThemeProvider';
import ThemeSwitcher from './components/ThemeSwitcher';

import './App.css';

function App() {
    const [query, setQuery] = React.useState('');

    const { data, loading } = useGifSearch(query);

    const { theme } = useTheme();

    const handleSearch = React.useCallback((text: string) => {
        setQuery(text);
    }, []);

    return (
        <div className={`App App--${theme}`}>
            <ThemeSwitcher />
            <h1>Gif Search</h1>
            <SearchInput onChange={handleSearch} />
            {loading ? <p>Searching...</p> : <SearchResults data={data} />}
        </div>
    );
}

export default App;
