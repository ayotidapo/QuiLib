import './carousel.css'

import Flickity from 'react-flickity-component'

const flickityOptions = {
	initialIndex: 3,
	wrapAround: true
}

function Carousel() {
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
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="gallery-cell"><img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
			</Flickity>
		</section>
	)
}

export default Carousel