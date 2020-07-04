import React,{useState} from 'react'
import Axios from 'axios';
import Movie from './Movie';
import {v4 as uuidv4} from 'uuid';




export default function Moviestore() {

    const [query,setQuery] = useState("");
        const [movies,setMovies] = useState([]);
        

        const url = `http://www.omdbapi.com/?apikey=e68c8c5
        `;
        const getdata = async () => {
            if (query !== "") {
              const result = await Axios.get(url+"&s="+query);
              
              console.log(result);
              setMovies(result.data.Search);
              setQuery("");
              
            } 
          };
       const  onChange = (e) => setQuery(e.target.value);

        
        const onSubmit = (e) =>{
            e.preventDefault();
            getdata();
            
            

        }


    return (
        <div className="Moviestore">
            <h1>The Movie Store</h1>
            <form className="search-form" onSubmit={onSubmit}>
            <input  type="text"name="query" value={query} placeholder="Search Movie" onChange={onChange}></input>
            <input type="submit" value="Search" />

            </form>
            <div className="Movies">
            {movies !==[] && movies.map( movie=> <Movie  key ={uuidv4()} movie = {movie}/>)}
            </div>
           
        </div>
    )
}
