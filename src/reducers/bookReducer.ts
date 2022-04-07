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
    
	if(newbook.number_of_purchases >= newbook.available_copies) return newState
	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	if(bookids.includes(newbook.id)) {	
		console.log(newState.addedBooks,bookIndex,newbook)
		newState.addedBooks[bookIndex].number_of_purchases += 1
		return newState
	}
	newState.addedBooks[bookIndex].available_copies -= 1
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
	newState.addedBooks[bookIndex].number_of_purchases += 1
	return newState

  }

  const reduceQtyFun=(state:Book, action:Action)=>{

	const newState={ ...state }
    const bookId=action.id
	
	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	newState.addedBooks[bookIndex].number_of_purchases -= 1
	return newState

  }