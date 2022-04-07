import { useState } from 'react';
import Header from 'components/Header'
import BookItem from 'components/BookItem';
import CartView from 'components/CartView'
import bookData from 'utils/books.json'
import './index.css';
import './App.css';
import Carousel from 'components/Carousel';


function App() {
  const { data: books } = bookData;
  const [showCart, setShowCart] = useState<boolean>(false)



  return (
    <>
      <div>
        <CartView showCart={showCart} onShowCart={() => setShowCart(false)} />
        <Header onShowCart={() => setShowCart(true)} />
        <main className='main'>
          <div className='featured-h6'>
            <h6 className='h6'>Featured Books</h6>
          </div>
          <Carousel />
          <div className='featured-h6'>
            <h6 className='h6'>All Books</h6>
          </div>
          <section className='book-items-wrapper' >
            {books.map((book, i) => <BookItem key={i} book={book} showCart={() => setShowCart(true)} />)}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
