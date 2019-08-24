import React from 'react'

const Filter = ({newFilter, setNewFilter}) => {

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

    return (
        <div>
            <form>
                <h3>Filter:</h3> <input value={newFilter} onChange={handleFilter} />
            </form>
        </div>
    )
}

export default Filter