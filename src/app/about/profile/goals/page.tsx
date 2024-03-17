import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import '../profile.scss'
import './goals.scss'
import { IoIosCheckmark } from 'react-icons/io'
type Props = {}
export default function page({}: Props) {
	return (
		<ContentWrapper key='page_profile_goals' id='page_profile_goals' className='center-page'>
			<div className="goal-container profile-panel">
				<div className="default">
					<Link href={'/about/profile'} className='btn btn-back'> <FaArrowLeft/> BACK</Link>
					<img src="/decors/bouquet_top.png" alt="" className='decor flower_top' />
					<img src="/decors/flower-stripe.png" alt="" className='decor flower_left' />
				</div>

				<div className="content">
					<figure>
						<div className="goal-art">
							<img src="/decors/goal-art.png" alt="" />
						</div>
					</figure>
					<article>
						<div className="goals-header">
							<div className="text-part">
								<h2>GOALS ✿</h2>
								<p>{`
									Step into a realm of possibility and ambition as our golden girl shares her hopes and dreams with you. From personal growth and creative projects to professional milestones and community aspirations, each goal is a new flower blooming toward a perfect garden. With the support of her loyal bunbuddies and adventurers alike, she embarks on a quest to turn her dreams into reality, one step at a time!
								`}</p>
							</div>
							<div className="progress">
								<p>0% Completed</p>
								<div className="bar-container">
									<div className="bar"></div>
								</div>
							</div>
						</div>

						<div className="goals-list">
							<div className="goal btn">
								<p>{`Reach 1000 (1K) followers on Twitch `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Debut my Model`}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Grow my Discord server to 100 members `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Collab with a bunch of VTuber friends & moots`}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn">
								<p>{`Release my First Cover`}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Reach Partner on Twitch `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn">
								<p>{`Reach 10,000 (10K) followers on Twitch `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Reach 10,000 (10K) followers on Twitter  `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Get sponsored by a big company  `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Launch an Itch.io Game `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</ContentWrapper>
	)
}