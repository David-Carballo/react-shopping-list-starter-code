import { useState } from "react"

function SearchBar({setAllProducts}) {

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    //! Nunca tenemos acceso al nuevo valor del estado en la misma secuencia de codigo
    setAllProducts((current)=>{
      return current.filter((product) => product.name.includes(event.target.value))
    })
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleChange} value={searchValue} type="text" />

    </div>
  )
}

export default SearchBar