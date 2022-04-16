import Input from "components/Input"
import Icon from "components/Icon"
import './search.css'

interface Props {
	value: string,
	onChangeInput(search: string): void,
	clearSearch(): void,
	isSearching(search: string): void
}

const SearchInput: React.FC<Props> = (props) => {
	const { value, clearSearch, isSearching, ...rest } = props


	return (
		<div className='search-div'>
			<Input placeholder='Search books, genres, authors, etc.' className='search-input' type="text" value={value} {...rest} />
			{value ?
				<div className='ip-ic-div times hand' onClick={() => { clearSearch(); isSearching("") }}>
					&times;
				</div> :
				<div className='ip-ic-div'>
					<Icon id="search" height={15} width={15} />
				</div>
			}
		</div>
	)
}

export default SearchInput