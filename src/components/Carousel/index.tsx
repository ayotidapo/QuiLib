import { useContext } from 'react';
import { BookContext } from 'context';
import { Book } from 'interfaces'
import './carousel.css'

import Flickity from 'react-flickity-component'



const flickityOptions = {
	initialIndex: 3,
	wrapAround: true
}

const Carousel: React.FC = () => {

	const { bookState: { featured } } = useContext(BookContext)

	return (
		<section className="carousel-wrapper">
			<Flickity
				className={'carousel'} // default ''
				elementType={'div'} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate // default false
				static // default false
			>
				{featured.map((book: Book) => <div className="gallery-cell"><img src={book.image_url} alt={book.title} /></div>)}


			</Flickity>
		</section>
	)
}

export default Carousel