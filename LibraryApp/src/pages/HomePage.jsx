import { useState } from "react"
import { books as bookData } from "../constants/mockData"
import BookCard from "../components/BookCard"
import SideCard from "../components/SideCard"
import styles from "./HomePage.module.css"
import SearchBox from "../components/SearchBox"


function HomePage() {
  const [books, setBooks] = useState(bookData)
  const [liked, setLiked] = useState([])
  const [search, setSearch] = useState([])
  
  const likedListHandler = (book ,status) => {
    // console.log({book,status})
    if(status) {
      const newLikedList = liked.filter(i => i.id !== book.id)
      setLiked(newLikedList)
    }else {
      setLiked(liked => [...liked, book])
    }
  }
    // console.log(books)

  const searchHandler = () => {
    if(search){
      const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else{
      setBooks(bookData)
    }
  }
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container}>
        <div className={styles.cards}>
          {books.map(book => <BookCard 
            key={book.id} 
            data={book} 
            liked={liked} 
            setLiked={setLiked}
            likedListHandler= {likedListHandler} />)}
        </div>
        { !! liked.length && 
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map(book => <SideCard key={book.id} data={book}/>)}
          </div>
        }
    </div>
    </>
  )
}

export default HomePage