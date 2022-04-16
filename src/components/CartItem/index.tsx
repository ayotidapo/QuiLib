import { Book, Author } from 'interfaces';
import { BookContext } from 'context';
import { useContext } from 'react';
import './cart.css'

interface Props {
  book: Book
}



const CartItem: React.FC<Props> = ({ book }) => {
  const { bookDispatcher } = useContext(BookContext)


  const controlQty = (book: Book, sign: string) => {

    const bookId = book?.id
    if (sign === '+') {
      return bookDispatcher({
        type: 'INCREASE_QTY',
        id: bookId
      })
    }
    if (sign === '-' && book?.number_of_purchases <= 1) {
      return onRemove(bookId)
    }

    bookDispatcher({
      type: 'REDUCE_QTY',
      id: bookId
    })

  }


  const onRemove = (id: number) => {
    bookDispatcher({
      type: 'REMOVE_BOOK',
      id
    })
  }

  const authors = book.authors.map((author: Author) => author.name)

  return (
    <article className='cart-item'>
      <div className='cart-item-img-box img-loading-animate'>
        <img
          src={book.image_url}
          alt={book.title}
        />
      </div>
      <div className='cart-item-desc'>
        <h6 className='h6'>{book.title}</h6>
        <span className='mt-5'>{authors}</span>
        <span className='remove hand' onClick={() => onRemove(book.id)}>Remove</span>
      </div>
      <div className='controls-price'>
        <span className='mt-5'>$ {book.price}</span>
        <div className='d-flx controls mt-10'>
          <span className={book.available_copies === 0 ? 'disabled' : 'hand'} onClick={() => controlQty(book, "+")}>+</span>
          <span>{book.number_of_purchases}</span>
          <span className='hand' onClick={() => controlQty(book, "-")}>-</span>
        </div>
        <span className='price'>{`$ ${book.total_price || book.price}`}</span>
      </div>
    </article>
  );
};
export default CartItem

