// import './ReadingList.css'

import { useState } from "react"

const ReadingList = () => {
    const [books, setBooks] = useState([])
    
    const handleDeleteButton = (bookToDelete) => {
        setBooks(books.filter(book => book != bookToDelete))
    }

    return (
        <div>

        </div>
    )
}