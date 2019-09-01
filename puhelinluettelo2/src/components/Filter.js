import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => {

    const handleFilterChange = (event) => {
        console.log('Filter changed: ', event.target.value);
        setNewFilter(event.target.value)
    }
    return (
        <div>
            Filter shown with <input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}



export default Filter