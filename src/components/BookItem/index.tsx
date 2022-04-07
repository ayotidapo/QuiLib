import Icon from 'components/Icon';
import { useContext } from 'react';
import { BookContext } from 'context';
import { Book } from 'interfaces'
import './book-item.css'

interface Props {
  book: Book;
  [key: string]: any;
  showCart(): void
}

const BookItem: React.FC<Props> = (props) => {
  const { book, showCart } = props
  const tags: string[] = book?.tags.map((tag: { name: string }) => tag.name)
  const tagNames: string = tags.join(',')

  const isoutOfStock = book.available_copies < book.number_of_purchases
  const { bookDispatcher, bookState } = useContext(BookContext)

  console.log(bookState)
  const addToCart = (book: Book) => {
    console.log(book)
    if (isoutOfStock) return false;
    console.log('called')
    showCart()
    bookDispatcher({ type: 'ADD_TO_CART', book })
  }

  return (
    <article className="book-item">
      <div className="mini-book-item">
        <div className="bk-div img-loading-animate">
          <img
            src={book.image_url}
            alt="book"
          />
        </div>
        <div className="desc-div">
          <h6 className="h6 mb-10 one-line-elips">{book.title}</h6>
          <span className="small m-bt-1 one-line-elips">
            {book.publisher}
          </span>
          <span className="small m-bt-1 one-line-elips">{tagNames}</span>
          <div className="ratings">
            <span>
              <Icon id="user" height={24} width={24} />
              {book.number_of_purchases}
            </span>
            <span>
              <Icon id="like" height={24} width={24} />
              {book.likes}
            </span>
            <div className="star-div">
              <span className="small m-bt-1 d-blk">Ratings: {book.rating}</span>
              {[1, 2, 3, 4, 5].map((num) => (
                <Icon key={num} id="star" height={17} width={16} />
              ))}
            </div>
          </div>
          <div className="price">
            <span>$29.99</span>
            {!isoutOfStock ? <span className="col-gr">{book.available_copies} Copies Available</span> : <span>Out of stock</span>}
          </div>
          <div className={`add-2-cart hand ${isoutOfStock && 'disabled'}`} onClick={() => addToCart(book)}>
            <Icon id="cart" height={14} width={15} />
            <h6>Add to Cart</h6>
          </div>
        </div>
      </div>
    </article >
  );
};

export default BookItem;
