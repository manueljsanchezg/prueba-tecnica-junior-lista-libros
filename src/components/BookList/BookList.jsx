import { useEffect, useState } from 'react'
import { Books } from '../../utils/books'
import BookCard from '../BookCard/BookCard.jsx'
import './BookList.css'

const BookList = () => {
    const [readingList, setReadingList] = useState([])

    useEffect(() => {
        const saveReadingList = localStorage.getItem('readingList')
        if(saveReadingList){
            setReadingList(JSON.parse(saveReadingList))
        }
    }, [])

    const addToReadingList = (book) => {
        if (!readingList.includes(book)) {
            const updatedList = ([...readingList, book])
            setReadingList(updatedList)
            localStorage.setItem('readingList', JSON.stringify(updatedList))
        }
    }

    const removeFromReadingList = (book) => {
        const updatedList = readingList.filter((b) => b.title !== book.title)
        setReadingList(updatedList)
        localStorage.setItem('readingList', JSON.stringify(updatedList))
    }

    console.log(Books)
    console.log(readingList)

    return (
        <div className='book-list-container'>
            <div className='book-list'>
                <h2>Lista de libros</h2>
                <p>Hay un total de {Books.length} libros</p>
                <div className='list'>
                    {(Books.map((book) =>
                        <BookCard
                            title={book.title}
                            url_image={book.url_image}
                            author={book.author}
                            addToReadingList={() => addToReadingList(book)}
                            showReadButton={!readingList.some((b) => b.title === book.title)}
                        />
                    ))}
                </div>
            </div>
            <div className='reading-list-container'>
                <h2>Libros que estás leyendo</h2>
                <p>Estas leyendo {readingList.length} libros</p>
                {readingList.length === 0 ? (
                    <p></p>
                ) : (
                    <div className='reading-list'>
                        {readingList.map((book) => (
                            <BookCard
                                key={book.title}
                                title={book.title}
                                url_image={book.url_image}
                                author={book.author}
                                showReadButton={false}
                                removeFromReadingList={() => removeFromReadingList(book)}
                                showRemoveButton={true}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookList