import React from 'react';

interface Props {
    onChange: (text: string) => void;
}

const SearchInput = (props: Props) => {
    const {onChange} = props;

    /*const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [inputRef]);*/

    // ref-callback
    const inputRefCallback = React.useCallback((node: HTMLInputElement) => {
        if (node !== null) {
            node.focus();
        }
    }, []);

    const handleChange = React.useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    return (
        <div>
            <input ref={inputRefCallback} type="text" onChange={handleChange} />
        </div>
    );
}

// shouldComponentUpdate(prev, next)
export default React.memo(SearchInput);