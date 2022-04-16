import {Book} from 'interfaces'


interface Action{
	type:string;
	[extraField:string]:any
}

const bookReducer = (state:Book, action:Action) => {
	switch (action.type) {
	  case 'ADD_TO_CART':
		return {...addToCartFunc(state,action) };
	  case 'REMOVE_BOOK':
		return {...removeFromCartFun(state,action) };
	  case 'INCREASE_QTY':
		return {...incrQtyFun(state,action) };
	  case 'REDUCE_QTY':
		return {...reduceQtyFun(state,action) };
	  case 'UPDATE_SEARCH':
		return {...updateSearch(state,action) };
	  default:
		return state;
	}
  };
  
  export default bookReducer;


  const addToCartFunc=(state:Book, action:Action)=>{

	const newState={ ...state }
    const newbook=action.book
	const bookId=action.book.id
	const bookids= newState.addedBooks.map((book:Book)=>book.id)

	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	if(bookids.includes(newbook.id)) {	
		const increment =newState.addedBooks[bookIndex].number_of_purchases + 1
		const decrement =newState.addedBooks[bookIndex].available_copies - 1

		newState.addedBooks[bookIndex].number_of_purchases = increment
		newState.addedBooks[bookIndex].available_copies = decrement

		return newState
	}
	
	const avBooks=newState.addedBooks[bookIndex]?.available_copies
	if(avBooks) newState.addedBooks[bookIndex].available_copies -= 1
	newState.addedBooks.push(newbook)

    return newState

  }

  const removeFromCartFun=(state:Book, action:Action)=>{

	const newState={ ...state }
    const bookId=action.id
	
	const newbooks=newState.addedBooks.filter((book:Book)=> book.id !== bookId )
    newState.addedBooks=newbooks
	return newState

  }

const incrQtyFun=(state:Book, action:Action)=>{

    const newState={ ...state }
    const bookId=action.id
	
	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	const booksIndex=newState.books.findIndex((book:Book)=> book.id === bookId )
	const book = {...(newState.addedBooks[bookIndex])}
	const book_s = {...(newState.books[bookIndex])}

	
	const purBooks=book?.number_of_purchases
	const availables=book?.available_copies
	let increment=0
	let decr=0
	let price=book?.price


	if(purBooks && availables > 0) { 
	  increment = purBooks + 1
	  decr= availables - 1
      
	  book.number_of_purchases = increment;
	  book.available_copies = decr;
	  book.total_price=(price * book.number_of_purchases)?.toFixed(2) 
	  book_s.number_of_purchases = increment;
	  book_s.available_copies = decr;



	  newState.addedBooks[bookIndex]=book
	  newState.books[booksIndex]=book_s
	}

	 
	 return newState

}

const reduceQtyFun=(state:Book, action:Action)=>{
	const newState={ ...state }
    const bookId=action.id


	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	const booksIndex=newState.books.findIndex((book:Book)=> book.id === bookId )
	const book = {...(newState.addedBooks[bookIndex])}
	const book_s = {...(newState.books[bookIndex])}



	
	const purBooks=book?.number_of_purchases
	const availables=book?.available_copies
	let increment=0
	let decr=0
	let price=book?.price


	if(purBooks > 0) { 
	  increment = availables  + 1
	  decr= purBooks - 1


	  book.number_of_purchases = decr;
	  book.available_copies = increment;
	  book.total_price=(price * book.number_of_purchases)?.toFixed(2) 
	  book_s.number_of_purchases = decr;
	  book_s.available_copies = increment;

	  newState.addedBooks[bookIndex]=book
	  newState.books[booksIndex]=book_s
	}

	 
	 return newState

}


  const updateSearch=(state:Book, action:Action)=>{

	const newState={ ...state }
    const searchedBooks=action.searches
	
	newState.searchedBooks = searchedBooks
	
	return newState

  }