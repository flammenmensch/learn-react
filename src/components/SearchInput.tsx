import React from 'react';

interface Props {
    onChange: (text: string) => void;
}

const SearchInput = (props: Props) => {
    const {onChange} = props;

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleChange = React.useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    return (
        <div>
            <input ref={inputRef} type="text" onChange={handleChange} />
        </div>
    );
}

export default SearchInput;