import React from 'react';

const Filter = ({ newFilter, setNewFilter}) => {

    const handleValueChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            Filter: <input value={newFilter} onChange={handleValueChange} />
            <div>
                debug: {newFilter}
            </div>
        </div>
    )
}

export default Filter