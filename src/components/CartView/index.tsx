import Icon from 'components/Icon';
import CartItem from 'components/CartItem';
import { Book } from 'interfaces';
import { BookContext } from 'context';
import { useContext } from 'react';
import Button from 'components/Button';
import "./cartview.css"

interface Props {
  showCart: boolean;
  onShowCart: (state: boolean) => void
}

const CartView: React.FC<Props> = (props) => {
  const { showCart, onShowCart } = props

  const { bookState } = useContext(BookContext)
  const addedBooks = bookState.addedBooks

  const stopProg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <div className={showCart ? 'cart-overlay' : 'cart-overlay-hide'} onClick={() => onShowCart(false)}>
      <div className={`${showCart ? 'tog-view-show' : 'tog-view'} `} onClick={stopProg}>
        <section className='cart-wrapper'>
          <div className='cart-header'>
            <span className='hand' onClick={() => onShowCart(false)}>
              <Icon id='back' width={12} height={12} /> Back
            </span>
            <span >
              Your Cart
              <Icon id='cart' width={20} height={20} />
            </span>
          </div>
          <div className='cart-box'>
            {addedBooks.map((book: Book) => <CartItem key={book.id} book={book} />)}

          </div>
          <div className='checkout-box'>
            <div className='d-flx-jc-sb mb-10 mt-10'>
              <span className='subt'>Subtotal</span>
              <span className='subt-price'>$94.76</span>
            </div>
            <Button className='cart-box-btn'>
              <span>
                <Icon id='cart' height={20} width={20} />
              </span>
              <span className='proceed'>Proceed to Checkout</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartView;
