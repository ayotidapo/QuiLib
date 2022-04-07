import { useState } from 'react'
import Icon from 'components/Icon'
import SearchInput from 'components/SearchInput'
import './header.css'

interface Props {
	onShowCart(state: boolean): void

}

const Header: React.FC<Props> = (props) => {
	const { onShowCart } = props

	const [showSearch, setShowSearch] = useState<boolean>(false)


	const onToggle = (status: boolean): void => {
		setShowSearch(status)
	}
	const stopProg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

	return (
		<>
			<div className={`mob-search-overlay ${showSearch ? 'mob-search-overlay-show' : ' '}`} onClick={() => onToggle(false)}>
				<div className={`mobile-search-wrapper ${showSearch ? 'mobile-search-wrapper-show' : ' '}`} onClick={stopProg}>
					<Icon height={15} width={16} id="back" className="i-bk" onClickFunc={() => onToggle(false)} />
					<SearchInput />
				</div>
			</div>
			<header className='header'>
				<div className='brand-div' >
					<Icon id="logo" height={50} width={50} />
					<div className='d-flx-col brand-txt-div'>
						<span >Quidax Books</span>
						<em > A filmsy book company</em>
					</div>
				</div>
				<SearchInput />
				<div className='cart-div-nav'>
					<Icon id="search" height={15} width={15} className='srh' onClickFunc={() => onToggle(true)} />
					<Icon id="logo-wbg" height={50} width={50} className='wbg' />
					<div className='cart-div' onClick={() => onShowCart(true)}>
						<Icon id="cart" height={20} width={18.32} />
					</div>
				</div>
			</header>
		</>
	)
}
export default Header