import React from 'react'

const Book = ( {book}) =>{
    
    
    return (
        <div className="Book">
            
            <a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a>
            <h2>{book.volumeInfo.authors}</h2>
            
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
        </div>
    )
}
export default Book;
