import { useEffect } from 'react'
import Flickity from "flickity"
import 'flickity/dist/flickity.min.css';
import './carousel.css'



const Carousel: React.FC = () => {

	useEffect(() => {

		new Flickity('.main-carousel', {
			autoPlay: 4000,
			pauseAutoPlayOnHover: true,
			groupCells: true,
			wrapAround: true,
			adaptiveHeight: true,
			freeScroll: true,
			cellAlign: 'left',
		});

		// const  elem = document.querySelector('.main-carousel');
		// const flkty = new Flickity( elem as Element, {
		// // options
		// 	cellAlign: 'left',
		// 	contain: true
		// })

	}, []);


	return (


		<section className="carousel-wrapper">
			<div className=".main-carousel">
				<div className="carousel-cell" > <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="carousel-cell"> <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="carousel-cell"> <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="carousel-cell" > <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="carousel-cell"> <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>
				<div className="carousel-cell"> <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" /></div>


			</div>


		</section>
	)
}

export default Carousel