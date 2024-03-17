import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import '../profile.scss'
import './likes.scss'
type Props = {}

export default function page({}: Props) {
	return (
		<ContentWrapper key='page_profile_goals' id='page_profile_likes' className='center-page'>
			<div className="likes-container profile-panel">
				<div className="default">
					<Link href={'/about/profile'} className='btn btn-back'> <FaArrowLeft/> BACK</Link>
				</div>

				<div className="content">
					<figure>
						<div className="goal-art">
							<img src="/decors/likes-art.png" alt="" />
						</div>
					</figure>
					<article>
						<div className="header">
							<div className="text-part">
								<h2>LIKES & DISLIKES ✿</h2>
								<p>{`
								 “Hmmm I wonder what Emi’s into these days?” Well look no 
								 further! You can delve into the preferences and passions of our golden girl! Discover what makes her heart flutter with joy and what sends shivers down her fluffy ears. From her favorite foods and hobbies- to her most cherished pastimes and interests, each revelation offers a discovery into the enchanting world of our beloved bunny girl's personality. But just as the sky has its dark side, Emi isn't afraid to share her dislikes as well. Where certain foods, activities, or ideas may not quite align with her personal tastes. So come, wander through the corridors of Emi's preferences, and discover the wonders that make her unique. Who knows? You might just find a new favorite thing to share with our golden girl!
								`}</p>
							</div>
						</div>

						<div className="likes-list">
								<div className="list likes">
										<h2>LIKES <FaThumbsUp/></h2>
										<div className="item-list">
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
											<div className="item">
												<p>Things you like</p>
											</div>
										</div>
								</div>
								<div className="list dislikes">
									<h2>DISLIKES <FaThumbsDown/></h2>
									<div className="item-list">
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
											<div className="item">
												<p>Things you dislike</p>
											</div>
										</div>
								</div>
						</div>
					</article>
				</div>
			</div>
		</ContentWrapper>
	)
}