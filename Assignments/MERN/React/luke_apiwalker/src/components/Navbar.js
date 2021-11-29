import React, { useState, useEffect } from 'react'
import { navigate } from "@reach/router";
import axios from 'axios';


const Navbar = (props) => {
    const [everything, setEverything] = useState([])
    const [searchID, setSearchID] = useState(0)
    const [genre, setGenre] = useState("people")

    const onSearchHandler = (e) => {
        e.preventDefault();
        // props.handleSearchID(searchID)
        props.searchResults(searchID, everything);
        navigate(`/${genre}`)
    }

    useEffect(() => {
        props.handleSearchID(searchID)
    },[])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${genre}`)
            .then(response => {setEverything(response.data.results)})
            .catch(err => console.log(err))
        // return function cleanup() {
        //     setEverything([])
        //     }
    }, [genre, searchID]);



    const genreChange = (e) => {
        setGenre(e.target.value)
    }

    return (
        <div className="navbar">
            <label>Search For:</label>
            <select onChange={genreChange}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
            </select>
            
            <form onSubmit={onSearchHandler}>
                <label htmlFor="search">ID (0-9):</label>
                <input className="search" value={searchID} type="text" onChange={(e) => {setSearchID(e.target.value)}} />
                <input className="searchbtn" type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Navbar
