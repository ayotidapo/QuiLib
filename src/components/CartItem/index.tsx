import { Book } from 'interfaces';
import { BookContext } from 'context';
import { useContext } from 'react';
import './cart.css'

interface Props {
  book: Book
}


const CartItem: React.FC<Props> = ({ book }) => {
  const { bookDispatcher } = useContext(BookContext)

  const controlQty = (bookId: number, sign: string) => {
    if (sign === '+') {
      bookDispatcher({
        type: 'INCREASE_QTY',
        id: bookId
      })
    }
    else {
      bookDispatcher({
        type: 'REDUCE_QTY',
        id: bookId
      })
    }
  }



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
        <span className='mt-5'>{book.author}</span>
        <span className='remove'>Remove</span>
      </div>
      <div className='controls-price'>
        <span className='mt-5'>$ 29.99</span>
        <div className='d-flx controls mt-10'>
          <span className='hand' onClick={() => controlQty(book.id, "+")}>+</span>
          <span>{book.number_of_purchases}</span>
          <span className='hand' onClick={() => controlQty(book.id, "-")}>-</span>
        </div>
        <span className='price'>$ 59.98</span>
      </div>
    </article>
  );
};
export default CartItem

