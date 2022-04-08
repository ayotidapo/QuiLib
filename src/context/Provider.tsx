import { useReducer } from 'react';
import { BookContext } from 'context';
import { Book } from 'interfaces';
import reducer from 'reducers/bookReducer';
import bookData from 'utils/books.json'

const { data: books } = bookData



const BookProvider: React.FC = ({ children }) => {

  const [bookState, bookDispatcher] = useReducer(reducer, {
    addedBooks: [],
    books,
    searchedBooks: [],
    featured: [...books.filter((book: Book) => book.featured)]
  });

  return (
    <BookContext.Provider value={{ bookState, bookDispatcher }}>
      {children}
    </BookContext.Provider>
  )

};

export default BookProvider;
