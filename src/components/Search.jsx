import { useGlobalContext } from "../context";
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext()

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit} className='form' >
        <input type="text" placeholder="  Search for products" className="form-input rounded-md" size="50" onChange={handleChange} value={searchTerm}>
        </input>
        <button type="submit" className='btn h-[28px]'><BsSearch />
        </button>
      </form>
    </header>
  )
}
export default Search