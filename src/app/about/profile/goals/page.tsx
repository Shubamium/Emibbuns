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
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex,</p>
							</div>
							<div className="progress">
								<p>75% Completed</p>
								<div className="bar-container">
									<div className="bar"></div>
								</div>
							</div>
						</div>

						<div className="goals-list">
							<div className="goal btn checked">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn checked">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn checked">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn checked">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
								<div className="icon">
									<IoIosCheckmark/>
								</div>
							</div>
							<div className="goal btn ">
								<p>{`Goal Name. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. `}</p>
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