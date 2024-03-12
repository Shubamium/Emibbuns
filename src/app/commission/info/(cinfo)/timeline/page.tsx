import CinfoLayout from '@/app/components/cinfoLayout/CinfoLayout'
import React from 'react'
import './timeline.scss'

type Props = {}

export default function page({}: Props) {
	return (
		<CinfoLayout id='page_timeline' 
			title='Timeline'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi. '
			>
				<div className="delivery">
					<figure><img src="/graphics/timeline-art.png" alt="" /></figure>
					<article>
						<h2>DELIVERY</h2>
						<p>Depending on how many projects I am working on at the same time as yours, delivery times for artwork & graphics range from <strong>1 week</strong> up to <strong>2 months</strong>. </p>
						<br />
						<p>I generally work faster on <u>art based commissions.</u></p>
					</article>
				</div>

				<div className="updates">
						<div className="time">
							 <div className="top">
								<h2>DELIVERY TIME</h2>
								<p>1 WEEK - 2 MONTHS</p>
							 </div>
							 <div className="bottom">
									<h2>COMMUNICATION</h2>
									<p>{`I'll `}keep you posted while I work on your commission through Twitter, Discord or Email on a <strong>regular basis. </strong></p>
							 </div>
						</div>
						<div className="update">
							<div className="text-part">
								<h2>UPDATES</h2>
								<p>For your <strong>review and approval</strong>, you will receive photos of the sketch, lineart, flat colour, and shaded progress pictures.</p>
								<br />
								<p>For graphics you will recieve a similar progress timeline.</p>
							</div>
							<div className="img-part">
								<img src="/graphics/decor_timeline.png" alt="" />
							</div>
						</div>
				</div>
		</CinfoLayout>
	)
}