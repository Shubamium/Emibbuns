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
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex,</p>
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