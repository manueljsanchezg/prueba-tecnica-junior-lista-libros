import './BookCard.css'

const BookCard = ({ title, url_image, author, addToReadingList, showReadButton, removeFromReadingList, showRemoveButton }) => {

    return (
        <div className='book-card'>
            <img src={url_image} width="150px" height="200px" />
            <h3>{title}</h3>
            <p>{author}</p>
            {showReadButton && <button onClick={addToReadingList}>Leer</button>}
            {showRemoveButton && <button onClick={removeFromReadingList}>Eliminar</button>}
        </div>
    )
}

export default BookCard