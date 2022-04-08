import { useState, useContext } from 'react';
import Header from 'components/Header'
import BookItem from 'components/BookItem';
import CartView from 'components/CartView'
import Carousel from 'components/Carousel';
import { BookContext } from 'context';
import { Book } from 'interfaces'
import './index.css';
import './App.css';



function App() {

  const [showCart, setShowCart] = useState<boolean>(false)





  const { bookState: { books: allBooks, searchedBooks } } = useContext(BookContext)

  const isSearchedAvailable = searchedBooks.length > 0


  const books = isSearchedAvailable ? searchedBooks : allBooks

  console.log({ searchedBooks })

  return (
    <>
      <div>
        <CartView showCart={showCart} onShowCart={() => setShowCart(false)} />
        <Header onShowCart={() => setShowCart(true)} />
        <main className='main'>
          <div className='featured-h6'>
            <h6 className='h6'>Featured Books</h6>
          </div>
          {!isSearchedAvailable && <Carousel />}
          <div className='featured-h6'>
            <h6 className='h6'>All Books</h6>
          </div>
          <section className='book-items-wrapper' >
            {books.map((book: Book, i: number) => <BookItem key={i} book={book} showCart={() => setShowCart(true)} />)}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
