import React from 'react'

interface Props {
    data: any[];
}

const SearchResults = (props: Props) => {
    if (props.data.length === 0) {
        return <p>No results</p>;
    }

    return (
        <ul>
            {props.data.map((item) => {
                return (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.images.fixed_height.url} alt={item.title} />
                    </li>
                );
            })}
        </ul>
    );
}

export default SearchResults;