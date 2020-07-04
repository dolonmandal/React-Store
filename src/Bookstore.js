import React ,{useState} from 'react'
import Axios from 'axios';
import Book from './Book'
import {v4 as uuidv4} from 'uuid';


export default function Bookstore() {

        const [query,setQuery] = useState("");
        const [books,setBooks] = useState([]);
        

        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        const getdata = async () => {
            if (query !== "") {
              const result = await Axios.get(url);
              
              console.log(result);
              setBooks(result.data.items);
              setQuery("");
              
            } 
          };
       const  onChange = (e) => setQuery(e.target.value);

        
        const onSubmit = (e) =>{
            e.preventDefault();
            getdata();
            
            

        }


    return (
        <div className="bookstore">
            <h1 onClick={getdata}>The Book Store</h1>
            <form className="search-form" onSubmit={onSubmit}>
            <input  type="text" 
            placeholder="Search Book" 
            name="query" 
            value={query} onChange={onChange}></input>
            <input type="submit" value="Search" />

            </form>
            <div className="Books">
            {books !==[] && books.map( book=> <Book  key ={uuidv4()} book = {book}/>)}
            </div>
            
        </div>
    )
}
