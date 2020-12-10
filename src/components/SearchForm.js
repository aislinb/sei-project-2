import React from 'react'

function SearchForm({ setSearchTerm }) {

  const [ formdata, setFormdata ] = React.useState('')
  const handleChange = (event) => {
    setFormdata(event.target.value)
  }

  // console.log('current input', formdata)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(formdata)
  }
  // console.log('form data is', formdata)

  return (
    <div className="search-box"> 
      <h3>Search for your word below</h3>
      <form onSubmit={handleSubmit}>
        <input 
          className="input-field"
          placeholder="Search word"
          onChange={handleChange}
        />
        <button type="submit" className="button">Search!</button>
      </form>
    </div>
  )
}

export default SearchForm



