import { useContext } from 'react';
import { BookContext } from 'context';
import Icon from 'components/Icon';
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
								<h3 className="book-title">Built to Last</h3>
								<p className="author">Jim Collins, Jerry I. Porras</p>
								<span className="year">2002</span>
							</div>
							<div className="genre-info">
								<h4 className="sub-title">Genre</h4>
								<span className="genre">Non-fiction</span>
							</div>
							<div className="tag-info">
								<h4 className="sub-title">Tags</h4>
								<span className="tags">Strategy, Corporate</span>
							</div>
							<div className="more-book-info">
								<div className="like-and-purchase">
									<div >
										<Icon id="user" height={24} width={24} />
										<span className="user-purchase">10</span>
									</div>
									<div className="lk">
										<Icon id="like" height={24} width={24} />
										<span className="likes">8</span>
									</div>
								</div>
								<div className="ratings">
									<div className="rating-info">
										<h4 className="sub-title">Ratings:</h4>
										<span>4.6</span>
									</div>
									<div className="star-wrapper">
										<div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(0px)' }}
											/>
										</div>
										<div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(0px)' }}
											/>
										</div>
										<div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(0px)' }}
											/>
										</div>
										<div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(0px)' }}
											/>
										</div>
										<div className="star-container">
											<div
												className="star"
												style={{ transform: 'translateX(-6.712px)' }}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Flickity>
		</section>
	)
}

export default Carousel