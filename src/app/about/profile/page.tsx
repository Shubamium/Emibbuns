'use client'
import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import React from 'react'
import './profile.scss'
import Link from 'next/link'
import { FaArrowLeft, FaCoffee, FaCrown, FaLongArrowAltRight, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
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
					<img src="/decors/bouquet_top.png" alt="" className='decor flower_top' />
					<img src="/decors/flower-stripe.png" alt="" className='decor flower_left' />
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
								<p className='bio'> Want to know more about this mysterious and magical bunny? Step into her world of magic and imagination! Learn about Emi’s lore, personality and more! </p>
								<Link href={'/about/story'} className='btn btn-story'>Read my story <FaLongArrowAltRight/></Link>
							</div>
							<div className="context">
									<div className="contact-list">
										<a href="https://www.youtube.com/@emibbuns" target='_blank' className='btn btn-contact'> <FaYoutube/></a>
										<a href="https://www.tiktok.com/@emibbuns" target='_blank' className='btn btn-contact'> <FaTiktok/></a>
										<a href="https://www.twitch.tv/emibbuns" target='_blank' className='btn btn-contact'> <FaTwitch/></a>
										<a href="https://twitter.com/emibbuns" target='_blank' className='btn btn-contact'> <FaTwitter/></a>
										<a href="https://ko-fi.com/emibbuns" target='_blank' className='btn btn-contact'> <FaCoffee/></a>
										<a href="https://throne.com/emibbuns" target='_blank' className='btn btn-contact'> <FaCrown/></a>
									</div>

									<div className="stats-tags">
										<div className="stats">
											<p><span className='tag-type'>General</span>#emibbuns</p>
										</div>
										<div className="stats">
											<p><span className='tag-type'>LIVE</span>#emiONAIR</p>
										</div>
										<div className="stats">
											<p><span className='tag-type'>Art</span>#emibrushes</p>
										</div>
										<div className="stats">
											<p><span className='tag-type'>Clips</span>#emiclips</p>
										</div>
										<div className="stats">
											<p><span className='tag-type'>Fan Name</span>#bunbuddies</p>
										</div>
										<div className="stats">
											<p><span className='tag-type'>Oshi Mark</span>🌷💗</p>
										</div>
										{/* <div className="stats">
											<p>🌷💗</p>
										</div> */}
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
								{/* <div className="btn btn-bar"><BiPalette/>REFERENCE <IoIosArrowForward/></div> */}
								<div className="hobbies">
									<div className="hobbies-head">
										<div className="icon">
											<img src="/decors/bunny.svg" alt="" className='bunny' />
										</div>
										<h3>HOBBIES</h3>
										<hr />
									</div>
									<p className='detail-text'>
										Gardening, Drawing, Painting, Cooking, Baking, Dancing, Skincare, Makeup, Collecting things, Organizing, Reading, Watching movies and writing stories.
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