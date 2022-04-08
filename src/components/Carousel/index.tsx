import { useContext } from 'react';
import { BookContext } from 'context';
import Icon from 'components/Icon';
import { Book, Author } from 'interfaces'
import './carousel.css'

import Flickity from 'react-flickity-component'



const flickityOptions = {
	initialIndex: 3,
	wrapAround: true
}

const Carousel: React.FC = () => {

	const { bookState: { featured } } = useContext(BookContext)

	const joinArray = (authors: Author[]) => {
		const mapAuthors = authors.map((author: Author) => author.name)
		const res = mapAuthors.join(',')
		return res
	}


	const ratings = (rating: number) => Array.from(Array(Math.ceil(rating)).keys())


	return (
		<section className="carousel-wrapper">
			<Flickity
				className={'carousel'}
				elementType={'div'}
				options={flickityOptions}
				disableImagesLoaded={false}
				reloadOnUpdate
				static
			>
				{featured.map((book: Book) =>
					<div className="gallery-cell img-loading-animate">
						<img src={book.image_url} alt={book.title} />
						<div className="card-details">
							<span className="available">Available</span>
							<div className="author-info">
								<h3 className="book-title">{book.title}</h3>
								<p className="author one-line-elips wt-100">{joinArray(book.authors)}</p>
								<span className="year">{book?.release_date?.slice(0, 4)}</span>
							</div>
							<div className="genre-info">
								<h4 className="sub-title">Genre</h4>
								<span className="genre one-line-elips wt-100">{joinArray(book.genres)}</span>
							</div>
							<div className="tag-info">
								<h4 className="sub-title">Tags</h4>
								<span className="tags one-line-elips wt-100">{joinArray(book.tags)}</span>
							</div>
							<div className="more-book-info">
								<div className="like-and-purchase">
									<div >
										<Icon id="user" height={24} width={24} />
										<span className="user-purchase">{book.number_of_purchases}</span>
									</div>
									<div className="lk">
										<Icon id="like" height={24} width={24} />
										<span className="likes">{book.likes}</span>
									</div>
								</div>
								<div className="ratings">
									<div className="rating-info">
										<h4 className="sub-title">Ratings:</h4>
										<span>{book.rating}</span>
									</div>
									<div className='star-wrapper'>
										{(ratings(book.rating)).map((num) => <div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(0px)' }}
											/>
										</div>)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Flickity>
		</section >
	)
}

export default Carousel