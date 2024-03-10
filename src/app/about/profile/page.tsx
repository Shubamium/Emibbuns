'use client'
import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import React from 'react'
import './profile.scss'
import Link from 'next/link'
import { FaArrowLeft, FaLongArrowAltRight, FaTwitter } from 'react-icons/fa'
import { LuFlower } from 'react-icons/lu'
import { IoIosArrowForward } from 'react-icons/io'
import { BiPalette } from 'react-icons/bi'
import { GiFlowerPot } from 'react-icons/gi'
import { FaListCheck } from 'react-icons/fa6'
type Props = {}

export default function Profile({}: Props) {
	return (
		<ContentWrapper key='page_profile' id='page_profile' >
			<div className="profile-container profile-panel">
				<div className="default">
					<Link href={'/about'} className='btn btn-back'> <FaArrowLeft/> BACK</Link>
					
				</div>

				<div className="content">
					<figure className='art-part'>
						<img src="/graphics/emib.png" alt="" className='emi' />
					</figure>
					<article>
						<div className="about-me">
							<div className="main-text">
								<div className="title">
									<h2>ABOUT ME ✿</h2><div className="bar"></div>
								</div>
								<p className='subtitle'>Your shining golden bunny girl is here! 𓆩🌷𓆪</p>
								<p className='bio'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi. </p>
								<Link href={'/about/story'} className='btn btn-story'>Read my story <FaLongArrowAltRight/></Link>
							</div>
							<div className="context">
									<div className="contact-list">
										<a href="#" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
										<a href="#" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
										<a href="#" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
										<a href="#" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
										<a href="#" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
									</div>

									<div className="stats-tags">
										<div className="stats">
											<p>#tags_here</p>
										</div>
										<div className="stats">
											<p>#tags_here</p>
										</div>
										<div className="stats">
											<p>#tags_here</p>
										</div>
										<div className="stats">
											<p>#tags_here</p>
										</div>
										<div className="stats">
											<p>#tags_here</p>
										</div>
										<div className="stats">
											<p>#tags_here</p>
										</div>
									</div>
							</div>
						</div>
						<div className="about-bar">
							<div className="credit">
								<img src="/graphics/credit-bar.png" alt="" className='credit-art' />
								<button  onClick={()=>{
									const event = new Event('openCredit');
									document.dispatchEvent(event)
									
								}} className="btn btn-bar"><LuFlower/>CREDITS <IoIosArrowForward/></button>
							</div>
							<div className="refhob">
								<div className="btn btn-bar"><BiPalette/>REFERENCE <IoIosArrowForward/></div>
								<div className="hobbies">
									<div className="hobbies-head">
										<div className="icon">
											<img src="/decors/bunny.svg" alt="" className='bunny' />
										</div>
										<h3>HOBBIES</h3>
										<hr />
									</div>
									<p className='detail-text'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi. 
									</p>
								</div>
							</div>
							<div className="artone">
								<img src="/graphics/art-bar.png" alt="" />
							</div>
							<div className="other">
								<img src="/graphics/art-eye.png" alt=""  />
								<Link href={'/about/profile/likes'} className="btn btn-bar"><GiFlowerPot/>LIKES & DISLIKES <IoIosArrowForward/></Link>
								<Link href={'/about/profile/goals'} className="btn btn-bar"><FaListCheck/>GOALS  <IoIosArrowForward/></Link>
							</div>
						</div>
					</article>
				</div>
			</div>
		</ContentWrapper>
	)
}