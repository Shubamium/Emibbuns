import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './family.scss'
type Props = {}

export default function Family({}: Props) {
	return (
		<ContentWrapper key='page_family' id='page_family'>
			<div className="family-panel">
					<div className="head">
								<Link href={'/about'} className='btn btn-back'> <FaArrowLeft/></Link>
								<div className="title">
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
									<h2>FAMILY</h2>
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
								</div>
					</div>
					<p className='description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi. Phasellus ex ipsum, volutpat at purus ornare, condimentum rutrum tellus.
					</p>
					<div className="action">
						<button className='btn btn-fam l'> <FaArrowLeft/></button>
						<button className='btn btn-fam r'> <FaArrowRight/></button>
					</div>
					<div className="family-list">
						<div className="family">
							<div className="image">
								<img src="/graphics/mascot-sample.png" alt="" />
							</div>
							<div className="detail">
								<div className="name">
									<p>Bunny Companion</p>
									<h2>BO</h2>
								</div>
								<div className="phys-detail">
									<p className='age'>5 YEARS OLD</p>
									<p className='height'>2’11</p>
								</div>
							</div>
							<div className="family-desc">
								<p>Evangeline is Emi’s spirit sister from the forest. They got separated when fleeing from the hunters and Evangeline had been searching for Emi ever since. Now that they’ve found each other Evangeline likes to play games and dance with Emi whenever they get the chance. It reminds her of the time when they used to live in the forest. Evangeline loves the ocean and to play with seashells and jellyfish. </p>
							</div>
						</div>
						<div className="family">
							<div className="image">
								<img src="/graphics/mascot-sample.png" alt="" />
							</div>
							<div className="detail">
								<div className="name">
									<p>Bunny Companion</p>
									<h2>BO</h2>
								</div>
								<div className="phys-detail">
									<p className='age'>5 YEARS OLD</p>
									<p className='height'>2’11</p>
								</div>
							</div>
							<div className="family-desc">
								<p>Evangeline is Emi’s spirit sister from the forest. They got separated when fleeing from the hunters and Evangeline had been searching for Emi ever since. Now that they’ve found each other Evangeline likes to play games and dance with Emi whenever they get the chance. It reminds her of the time when they used to live in the forest. Evangeline loves the ocean and to play with seashells and jellyfish. </p>
							</div>
						</div>
					</div>
			</div>
		</ContentWrapper>
	)
}