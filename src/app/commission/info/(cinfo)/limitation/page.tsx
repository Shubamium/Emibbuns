import CinfoLayout from '@/app/components/cinfoLayout/CinfoLayout'
import React from 'react'
import './limitation.scss'

type Props = {}

export default function page({}: Props) {
	return (
		<CinfoLayout id='page_limitation' 
			title='Limitation'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi.'
			>
			<div className="content">
				<div className="limitations">
					<div className="limitation">
							<div className="title">
								<h2>I will do:</h2>
								<p>ALLOWED</p>
							</div>
							<div className="limit-top">
								<div className="limit">
									<p>Feminine characters/Cute girls</p>
								</div>
							</div>
							<div className="limit-bottom">
								<div className="left">
									<div className="limit">
										<p>Feminine Men/Boys</p>
									</div>
								</div>
								<div className="right">
									<div className="limit">
										<p>Kemonomimi / Animalistic characters</p>
									</div>
									<div className="limit">
										<p>Kemonomimi / Animalistic characters</p>
									</div>
								</div>
							</div>
					</div>
					<div className="limitation na">
							<div className="title">
								<h2>I {`won't`} do:</h2>
								<p>NOT ALLOWED</p>
							</div>
							<div className="limit-top">
								<div className="limit">
									<p>Gore</p>
									<p className='sub'>(blood is ok)</p>
								</div>
							</div>
							<div className="limit-bottom">
								<div className="left">
									<div className="limit">
										<p>MECHA</p>
									</div>
								</div>
								<div className="right">
									<div className="limit">
										<p>NSFW</p>
									</div>
									<div className="limit">
										<p>Elderly</p>
									</div>
								</div>
							</div>
					</div>
				</div>
				
			</div>
		</CinfoLayout>
	)
}