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

	if(newbook.number_of_purchases >= newbook.available_copies) {
	
		return newState 
	}
	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	if(bookids.includes(newbook.id)) {	
		const increment =newState.addedBooks[bookIndex].number_of_purchases + 1

		newState.addedBooks[bookIndex].number_of_purchases = increment

		return newState
	}
	console.log(newState.addedBooks[bookIndex]?.available_copies,100)
	const avBooks=newState.addedBooks[bookIndex]?.available_copies
	if(avBooks) newState.addedBooks[bookIndex].available_copies -= 1
	newState.addedBooks.push(newbook)
	console.log(newState.addedBooks[bookIndex]?.available_copies,200)
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
	const book= {...(newState.addedBooks[bookIndex])}

	
	const purBooks=book?.number_of_purchases
	const availables=book?.available_copies
	let increment=0
	let decr=0
	// const curPur=newState.addedBooks[bookIndex]?.number_of_purchases

	if(purBooks && availables > 0) { 
	  increment =purBooks + 1
	  decr= availables - 1

	  book.number_of_purchases = increment;
	  book.available_copies = decr;
	  newState.addedBooks[bookIndex]=book
	}

	 
	// console.log({increment})
	//  newState.addedBooks[bookIndex].number_of_purchases++
	//  console.log({in:newState.addedBooks[bookIndex].number_of_purchases,newState:{...newState}})
	// console.log({a:newState.addedBooks[bookIndex].number_of_purchases})
	 return newState

}

const reduceQtyFun=(state:Book, action:Action)=>{
	const newState={ ...state }
    const bookId=action.id
	
	const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )
	const book= {...(newState.addedBooks[bookIndex])}

	
	const purBooks=book?.number_of_purchases
	const availables=book?.available_copies
	let increment=0
	let decr=0
	// const curPur=newState.addedBooks[bookIndex]?.number_of_purchases

	if(purBooks && availables < purBooks) { 
	  increment = availables  + 1
	  decr= purBooks - 1

	  book.number_of_purchases = decr;
	  book.available_copies = increment;
	  newState.addedBooks[bookIndex]=book
	}

	 
	// console.log({increment})
	//  newState.addedBooks[bookIndex].number_of_purchases++
	//  console.log({in:newState.addedBooks[bookIndex].number_of_purchases,newState:{...newState}})
	// console.log({a:newState.addedBooks[bookIndex].number_of_purchases})
	 return newState

	// const newState={ ...state }
    // const bookId=action.id
		
	// const bookIndex=newState.addedBooks.findIndex((book:Book)=> book.id === bookId )

	// const purBooks=newState.addedBooks[bookIndex]?.number_of_purchases
     
	// if(purBooks === 1) {
	// 	const newbooks=newState.addedBooks.filter((book:Book)=> book.id !== bookId )
	// 	newState.addedBooks=newbooks
	// 	return newState
	// }
	// let increment=0
	// if(purBooks) { 
	//   increment =newState.addedBooks[bookIndex]?.number_of_purchases - 1
	// }
	
	// newState.addedBooks[bookIndex].number_of_purchases = increment	
	
	// return newState

}


  const updateSearch=(state:Book, action:Action)=>{

	const newState={ ...state }
    const searchedBooks=action.searches
	
	newState.searchedBooks = searchedBooks
	
	return newState

  }