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
  const [search, setSearch] = useState<string>("")

  const { bookState: { books: allBooks, searchedBooks } } = useContext(BookContext)
  const searchedLen = searchedBooks.length
  const books = search ? searchedBooks : allBooks

  const isSearching = (searchValue: string) => {

    setSearch(searchValue)
  }
  console.log('BGBG')
  return (
    <>
      <div>
        <CartView showCart={showCart} onShowCart={() => setShowCart(false)} />
        <Header onShowCart={() => setShowCart(true)} isSearching={isSearching} />
        <main className='main'>
          {!search &&
            <>
              <div className='featured-h6'>
                <h6 className='h6'>Featured Books</h6>
              </div>
              <Carousel />
            </>
          }
          <div className='featured-h6'>
            {search ?
              <h6 className='h6'>{searchedLen} results <span>found for</span>  {`'${search}'`}</h6>
              : <h6 className='h6'>All Books
              </h6>
            }
          </div>
          <section className='book-items-wrapper' >
            {books.map((book: Book, i: number) => <BookItem key={i} book={book} showCart={() => setShowCart(true)} />)}
          </section>
        </main>
      </div >
    </>
  );
}

export default App;
