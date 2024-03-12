import CinfoLayout from '@/app/components/cinfoLayout/CinfoLayout'
import React from 'react'
import './timeline.scss'
import { FaCopy, FaPaypal } from 'react-icons/fa'

type Props = {}

export default function page({}: Props) {
	return (
		<CinfoLayout id='page_how-to' 
			title='How To Commission'
			description='You can send me a message via Twitter, Discord, Email or submitting a request on VGen '
			>
			<div className="content">
				<div className="order-template">
					<div className="confine">
						<h2>ORDER TEMPLATE</h2>
						<p>You can use the following format for DM-ing:</p>
					<div className="field-list">
						<div className="field">
								<label htmlFor="name">NAME</label>
								<p>:</p>
								<input type="text" name="name" placeholder='Your Name' />
							</div>
							<div className="field">
								<label htmlFor="name">TYPE</label>
								<p>:</p>
								<input type="text" name="type" placeholder='(ex. Headshot, Bust-Up, VTuber Logo)' />
							</div>
							<div className="field">
								<label htmlFor="name">REFERENCES</label>
								<p>:</p>
								<input type="text" name="ref" placeholder='(Provide images or links to Google Drive, Dropbox, etc.)' />
							</div>
							<div className="field">
								<label htmlFor="name">INSPIRATION</label>
								<p>:</p>
								<input type="text" name="inspiration" placeholder='(Pose, Expression, Colours, Style)' />
							</div>
							<div className="field">
								<label htmlFor="name">PAYMENT</label>
								<p>:</p>
								<div className="options">
									<button className='btn btn-opt'>  VGEN</button>
									<button className='btn btn-opt'>  PAYPAL</button>
								</div>
							</div>
					</div>
					</div>
				</div>
				<button className="btn btn-copy"> <FaCopy/> COPY</button>
			</div>
		</CinfoLayout>
	)
}