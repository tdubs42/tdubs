import React from 'react';

const CallToAction = () => {
	return (
		<div className="carousel w-full h-72 my-2 rounded-3xl">
			<div id="slide1" className="carousel-item relative w-full bg-primary-content">
				<text className="w-full text-primary text-center my-auto px-24 md:text-2xl">
					Elevate Your Story with Grey Way
					<br />
					<br />
					Dive into a world where technology meets artistry, powered by faith. Whether it's a captivating and responsive web experience or timeless photographs, we are here to help you build your brand.
					<br />
					<br />
					Start Your Journey Today!
				</text>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">❮</a>
					<a href="#slide2" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full"/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">❮</a>
					<a href="#slide3" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full"/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">❮</a>
					<a href="#slide4" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full"/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">❮</a>
					<a href="#slide1" className="btn btn-circle">❯</a>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;