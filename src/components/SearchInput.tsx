import React from 'react';

interface Props {
    onChange: (text: string) => void;
}

const SearchInput = (props: Props) => {
    const {onChange} = props;
    const handleChange = React.useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);
    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default SearchInput;