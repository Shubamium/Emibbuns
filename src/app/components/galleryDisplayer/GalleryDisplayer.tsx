'use client'
import React from 'react'
import Slider from 'react-slick'


import './galleryDisplayer.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from '@/db/db';
type Props = {
	title:string;
	imageList:{
		artist:string;
		link:string,
		art:any,
	}[]
}

export default function GalleryDisplayer({
	title,
	imageList
}: Props) {
	const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 3,
		arrows:true,
		autoplay:true,
  };
	return (
		<div className='gallery-displayer'>
			<div className="head">
					<h2>{title}</h2>
					<div className="icon">
						<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.0553 14.9556C23.8897 12.8903 22.3635 10.1884 20.7556 8.48407C21.379 6.22303 21.4607 3.12217 19.7559 1.69144C18.0511 0.258816 15.0101 0.874428 12.8891 1.87765C10.9314 0.585622 8.00834 -0.451797 6.11725 0.726225C4.22807 1.90425 3.87456 4.98801 4.17295 7.31365C2.34078 8.77478 0.449695 11.2353 0.987562 13.3957C1.52543 15.556 4.3478 16.8461 6.65132 17.2793C7.47618 19.4739 9.23232 22.0313 11.4541 22.189C13.0278 22.2992 14.5331 21.1801 15.681 19.7893C17.9997 22.6773 19.6381 25.7307 20.537 28.7309C19.1629 26.6788 16.3177 24.9118 10.3974 24.9118C10.3974 32.8064 16.179 34.4177 19.9003 34.4177L25.9822 34.4215C25.9822 29.2477 24.1082 23.1923 19.7293 17.5092C21.2174 17.0399 22.5403 16.2229 23.0553 14.9556ZM14.7364 14.5376C14.2182 14.8608 13.6413 15.0789 13.0387 15.1792C12.4362 15.2796 11.8197 15.2603 11.2246 15.1225C10.6295 14.9847 10.0674 14.7311 9.5703 14.3761C9.07324 14.0212 8.65098 13.5718 8.32764 13.0537C8.0043 12.5355 7.7862 11.9588 7.68581 11.3564C7.58541 10.7541 7.60468 10.1378 7.74252 9.54287C7.88035 8.94793 8.13405 8.38596 8.48914 7.88904C8.84422 7.39212 9.29373 6.96999 9.812 6.64674C10.8587 5.99416 12.1218 5.78399 13.3235 6.06246C14.5252 6.34093 15.5671 7.08522 16.2198 8.13162C16.8726 9.17801 17.0828 10.4408 16.8043 11.6421C16.5257 12.8435 15.7812 13.885 14.7345 14.5376H14.7364ZM25.6401 21.5829C27.6985 25.706 28.8122 30.0438 28.8293 34.3227C35.0975 29.8177 35.1051 21.5031 35.1051 13.5173C35.1051 13.5173 28.1299 15.4819 25.6401 21.5829Z" fill="#FFDAA0"/>
						</svg>
					</div>
			</div>
			<div className="gallery-list">
				<Slider  {...settings}>
					{imageList.map((image,index)=>{
						return (
							<div className='image-frame' 
								onClick={()=>{
									window.open(image.link);
								}}
								key={image.artist+index}>
							<div className="img-part">
								<img src="/graphics/picture-frame.png" alt="" className='frame' />
								<img src={urlFor(image.art).url()} alt="" className='main-img' />
								<img src="/decors/gallery-flower.png" alt="" className='decor_flower' />
							</div>
							<div className="detail">
								<div className="icon">
									<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 20.9C0 25.4352 1.79107 29.7847 4.97918 32.9915C8.1673 36.1984 12.4913 38 17 38C17 33.4648 15.2089 29.1153 12.0208 25.9085C8.8327 22.7016 4.50868 20.9 0 20.9ZM17 38C21.5087 38 25.8327 36.1984 29.0208 32.9915C32.2089 29.7847 34 25.4352 34 20.9C29.4913 20.9 25.1673 22.7016 21.9792 25.9085C18.7911 29.1153 17 33.4648 17 38ZM28.3333 1.9V11.4C28.3333 14.4235 27.1393 17.3231 25.0139 19.461C22.8885 21.5989 20.0058 22.8 17 22.8C13.9942 22.8 11.1115 21.5989 8.98612 19.461C6.86071 17.3231 5.66667 14.4235 5.66667 11.4V1.9C7.06444 1.9 8.44333 2.128 9.74667 2.641C10.7856 3.078 11.7111 3.724 12.4856 4.541L17 0L21.5144 4.541C22.2889 3.724 23.2144 3.078 24.2533 2.641C25.5553 2.13947 26.9392 1.88812 28.3333 1.9Z" fill="white"/>
									</svg>
								</div>
								<div className="text btn" onClick={()=>{
									window.open(image.link,'_blank')
								}}>
									<p>art by</p>
									<h2>{image.artist}</h2>
								</div>
								<div className="icon">
									<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 20.9C0 25.4352 1.79107 29.7847 4.97918 32.9915C8.1673 36.1984 12.4913 38 17 38C17 33.4648 15.2089 29.1153 12.0208 25.9085C8.8327 22.7016 4.50868 20.9 0 20.9ZM17 38C21.5087 38 25.8327 36.1984 29.0208 32.9915C32.2089 29.7847 34 25.4352 34 20.9C29.4913 20.9 25.1673 22.7016 21.9792 25.9085C18.7911 29.1153 17 33.4648 17 38ZM28.3333 1.9V11.4C28.3333 14.4235 27.1393 17.3231 25.0139 19.461C22.8885 21.5989 20.0058 22.8 17 22.8C13.9942 22.8 11.1115 21.5989 8.98612 19.461C6.86071 17.3231 5.66667 14.4235 5.66667 11.4V1.9C7.06444 1.9 8.44333 2.128 9.74667 2.641C10.7856 3.078 11.7111 3.724 12.4856 4.541L17 0L21.5144 4.541C22.2889 3.724 23.2144 3.078 24.2533 2.641C25.5553 2.13947 26.9392 1.88812 28.3333 1.9Z" fill="white"/>
									</svg>
								</div>
								<img src="/decors/bouquet_top.png" alt="" className='decor_bouquet' />
							</div>
						</div>
						)
					})}
					{imageList.length < 2 && (
						<div className="image-frame"></div>
					)}
					{imageList.length < 3 && (
						<div className="image-frame"></div>
					)}
		

							
				</Slider>
			</div>
		</div>
	)
}