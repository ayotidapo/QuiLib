import { createContext } from 'react';
import { Book } from 'interfaces';

export const BookContext = createContext<Book>({
	addedBooks:[],
	books:[],
	searchedBooks: []
});
