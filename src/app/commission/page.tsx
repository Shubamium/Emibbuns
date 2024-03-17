'use client'
import React from 'react'
import ContentWrapper from '../components/contentWrapper/ContentWrapper'
import { FaScroll, FaShoppingCart } from 'react-icons/fa'
import './commission.scss'
import { useRouter } from 'next/navigation'
import { FaListOl, FaPaintRoller } from 'react-icons/fa6'
type Props = {}

export default function Commission({}: Props) {
	const router = useRouter();
	return (
		<ContentWrapper key='page_commission' id='page_commission' className='center-page'>
				<div className="commission-menu">
					<div className="confine">
					<figure>
						<div className="image">
							<img src="/decors/goal-art.png" alt="" />
						</div>
					</figure>
					<article>
						<div className="head">
							<h2>COMMISSION</h2>
							<div className="icon">
								<svg width="48" height="57" viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 32.667C0 39.0322 2.52856 45.1367 7.02944 49.6376C11.5303 54.1384 17.6348 56.667 24 56.667C24 43.3337 13.2533 32.667 0 32.667ZM24 12.667C25.7681 12.667 27.4638 13.3694 28.714 14.6196C29.9643 15.8699 30.6667 17.5655 30.6667 19.3337C30.6667 21.1018 29.9643 22.7975 28.714 24.0477C27.4638 25.2979 25.7681 26.0003 24 26.0003C22.2319 26.0003 20.5362 25.2979 19.286 24.0477C18.0357 22.7975 17.3333 21.1018 17.3333 19.3337C17.3333 17.5655 18.0357 15.8699 19.286 14.6196C20.5362 13.3694 22.2319 12.667 24 12.667ZM6.93333 25.3337C6.93333 27.1018 7.63571 28.7975 8.88595 30.0477C10.1362 31.2979 11.8319 32.0003 13.6 32.0003C15.0133 32.0003 16.32 31.547 17.3333 30.827V31.3337C17.3333 33.1018 18.0357 34.7975 19.286 36.0477C20.5362 37.2979 22.2319 38.0003 24 38.0003C25.7681 38.0003 27.4638 37.2979 28.714 36.0477C29.9643 34.7975 30.6667 33.1018 30.6667 31.3337V30.827C31.68 31.547 32.9867 32.0003 34.4 32.0003C36.1681 32.0003 37.8638 31.2979 39.114 30.0477C40.3643 28.7975 41.0667 27.1018 41.0667 25.3337C41.0667 22.667 39.4933 20.4003 37.2533 19.3337C39.4933 18.267 41.0667 15.9737 41.0667 13.3337C41.0667 11.5655 40.3643 9.86986 39.114 8.61961C37.8638 7.36937 36.1681 6.66699 34.4 6.66699C32.9867 6.66699 31.68 7.09366 30.6667 7.84033V7.33366C30.6667 5.56555 29.9643 3.86986 28.714 2.61961C27.4638 1.36937 25.7681 0.666992 24 0.666992C22.2319 0.666992 20.5362 1.36937 19.286 2.61961C18.0357 3.86986 17.3333 5.56555 17.3333 7.33366V7.84033C16.32 7.09366 15.0133 6.66699 13.6 6.66699C11.8319 6.66699 10.1362 7.36937 8.88595 8.61961C7.63571 9.86986 6.93333 11.5655 6.93333 13.3337C6.93333 15.9737 8.50667 18.267 10.7467 19.3337C8.50667 20.4003 6.93333 22.667 6.93333 25.3337ZM24 56.667C30.3652 56.667 36.4697 54.1384 40.9706 49.6376C45.4714 45.1367 48 39.0322 48 32.667C34.6667 32.667 24 43.3337 24 56.667Z" fill="white"/>
								</svg>
							</div>
						</div>
						<p className='description'>Looking for something that’ll make you smile when you see it? Well you’ve stumbled into the right place, Emi’s commissions are here. Providing personalized services according to your needs. This golden bunny girl is ready to bring you joy through art & graphic design! </p>

						<div className="commission-nav">
							<div className="btn btn-comms" onClick={()=>{
								window.open('https://vgen.co/emibbuns', '_blank');
							}}>
								<div className="icon">
									<FaShoppingCart/>
								</div>
								<h2>ORDER NOW</h2>
							</div>
							<div className="btn btn-comms" onClick={()=>{
									window.open('https://trello.com/b/7ZajwXxO/emis-commission-board', '_blank');
							}}>
								<div className="icon">
									<FaListOl/>
								</div>
								<h2>WAITLIST</h2>
							</div>
							<div className="btn btn-comms" onClick={()=>{
								router.push('/commission/info')
							}}>
								<div className="icon">
									<FaScroll/>
								</div>
								<h2>INFO</h2>
							</div>
							<div className="btn btn-comms" onClick={()=>{
								router.push('/commission/works')
							}}>
								<div className="icon">
									<FaPaintRoller/>
								</div>
								<h2>RECENT WORKS</h2>
							</div>
		
						</div>
					</article>
					</div>
				</div>
		</ContentWrapper>
	)
}