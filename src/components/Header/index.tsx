/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react'
import { BookContext } from 'context';
import { Book } from 'interfaces';
import Icon from 'components/Icon'
import SearchInput from 'components/SearchInput'
import './header.css'

interface Props {
	onShowCart(state: boolean): void,
	isSearching(search: string): void
}

const Header: React.FC<Props> = (props) => {
	const { onShowCart, isSearching } = props
	const { bookState: { addedBooks, books }, bookDispatcher } = useContext(BookContext)

	const [showSearch, setShowSearch] = useState<boolean>(false)
	const [search, setSearch] = useState<string>("")

	const cartCount: number = addedBooks.length || 0

	const onToggle = (status: boolean): void => {
		setShowSearch(status)
	}
	const stopProg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

	const onSearch = (search: string) => {
		setSearch(search)
		isSearching(search)
	}

	const onClearSearch = () => {
		setSearch("")

	}


	useEffect(() => {

		if (search) {
			const capSearch = `${search.charAt(0).toUpperCase()}${search.slice(1)}`
			const serchByBook = books.filter((book: Book) => book?.title?.includes(capSearch))

			bookDispatcher({
				type: 'UPDATE_SEARCH',
				searches: [...serchByBook]
			})
			return
		}

		bookDispatcher({
			type: 'UPDATE_SEARCH',
			searches: []
		})


	}, [search])

	return (
		<>
			<div className={`mob-search-overlay ${showSearch ? 'mob-search-overlay-show'
				: ' '}`} onClick={() => onToggle(false)}
			>
				<div className={`mobile-search-wrapper ${showSearch ? 'mobile-search-wrapper-show' : ' '}`}
					onClick={stopProg}
				>
					<Icon height={15} width={16} id="back" className="i-bk" onClickFunc={() => onToggle(false)} />
					<SearchInput value={search} onChangeInput={onSearch}
						clearSearch={onClearSearch} isSearching={isSearching}
					/>
				</div>
			</div>
			<header className='header'>
				<div className='brand-div' >
					<Icon id="logo" height={50} width={50} />
					<div className='d-flx-col brand-txt-div'>
						<span >QuidLib</span>
						<em > A filmsy book company</em>
					</div>
				</div>
				<SearchInput value={search} onChangeInput={onSearch}
					clearSearch={onClearSearch} isSearching={isSearching}
				/>
				<div className='cart-div-nav'>
					<Icon id="search" height={15} width={15} className='srh' onClickFunc={() => onToggle(true)} />
					<Icon id="logo-wbg" height={50} width={50} className='wbg' />
					<div className='cart-div hand' data-cartcount={cartCount} onClick={() => onShowCart(true)}>
						<Icon id="cart" height={20} width={18.32} />
					</div>
				</div>
			</header>
		</>
	)
}
export default Header
