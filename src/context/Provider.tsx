import { useReducer } from 'react';
import { BookContext } from 'context';
import reducer from 'reducers/bookReducer';



const BookProvider: React.FC = ({ children }) => {
  const [bookState, bookDispatcher] = useReducer(reducer, {
    addedBooks: []
  });
  return (
    <BookContext.Provider value={{ bookState, bookDispatcher }}>
      {children}
    </BookContext.Provider>
  )

};

export default BookProvider;
