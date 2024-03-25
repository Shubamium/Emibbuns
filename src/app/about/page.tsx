'use client'
import React from 'react'
import './about.scss'
import { useRouter } from 'next/navigation'
import ContentWrapper from '../components/contentWrapper/ContentWrapper'
type Props = {}


export default function Page({}: Props) {
	const router = useRouter();
	return (
		<ContentWrapper key='page_about' id='page_about'>
			<div className="about-navigation">
				<div className="side left">
					<div className="btn btn-about-access tilt-l" onClick={()=>{
						router.push('/about/story')
					}}>
						<div className="banner">
								<img src="/graphics/banner_placeholder.png" alt="" />
						</div>
						<div className="name">
							<p>STORY</p>
						</div>
					</div>
					<div className="btn btn-about-access  tilt-r" onClick={()=>{
						router.push('/about/family')
					}}>
						<div className="banner">
								<img src="/graphics/about-one.png" alt="" />
						</div>
						<div className="name">
							<p>FAMILY</p>
						</div>
					</div>
				</div>
				<div className="center-piece">
						<img src="/graphics/about_center.png" alt="" className='center-img' />
						<img src="/decors/bouquet_top.png" alt="" className='decor flower-top' />
						<img src="/decors/bouquet_top.png" alt="" className='decor flower-bottom' />
						<img src="/decors/flower-stripe.png" alt="" className='decor flower-left' />
						<img src="/decors/flower-stripe.png" alt="" className='decor flower-right' />
				</div>
				<div className="side right">
					<div className="btn-about-access image-only" >
						<div className="banner normal">
								<img src="/graphics/logo_main.png" alt="" />
						</div>
					</div>
					<div className="btn btn-about-access tilt-r" onClick={()=>{
						router.push('/about/profile')
						}}>
						<div className="banner">
								<img src="/graphics/timeline-art.png" alt="" />
						</div>
						<div className="name">
							<p>ABOUT ME</p>
						</div>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}