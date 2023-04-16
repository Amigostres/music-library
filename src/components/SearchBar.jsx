import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

export default function SearchBar({ setSearch }) {
    const { setSearch } = useContext(DataContext)
    let [searchTerm, setSearchTerm] = useState('')

    let onSearchSubmit = e => {
        e.preventDefault()
        setSearch(searchTerm)
    }     
   
    return(
        <form onSubmit={ onSearchSubmit }>
            <input type='text' placeholder='Enter a search term here' 
            onChange={e => setSearchTerm(e.target.value)}
            />

            <input type='submit'/>
        </form>
    )
}