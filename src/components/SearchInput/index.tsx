import Input  from "components/Input"
import Icon from "components/Icon"

const SearchInput:React.FC=()=>{
	return(
		<div className='search-div'>
		  <Input placeholder='Search books, genres, authors, etc.' className='search-input' type="text"  />
		  <div className='ip-ic-div'>
		   <Icon id="search" height={15} width={15}/>
		  </div>
		</div>
	)
}

export default SearchInput