'use client'
import CinfoLayout from '@/app/components/cinfoLayout/CinfoLayout'

import React, { useState } from 'react'
import './how-to.scss'
import { FaCopy, FaPaypal } from 'react-icons/fa'

type Props = {}



export default function Page({}: Props) {
	const [payment, setPayment] = useState('vgen');
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [references, setReferences] = useState('');
	const [inspiration, setInspiration] = useState('');
	
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
								<input type="text" name="name" value={name} onChange={(e)=>{
									setName(e.target.value)
								}} placeholder='Your Name' />
							</div>
							<div className="field">
								<label htmlFor="name">TYPE</label>
								<p>:</p>
								<input type="text" name="type" value={type} onChange={(e)=>{
									setType(e.target.value)
								}} placeholder='(ex. Headshot, Bust-Up, VTuber Logo)' />
							</div>
							<div className="field">
								<label htmlFor="name">REFERENCES</label>
								<p>:</p>
								<input type="text" name="ref"  value={references} onChange={(e)=>{
									setReferences(e.target.value)
								}}placeholder='(Provide images or links to Google Drive, Dropbox, etc.)' />
							</div>
							<div className="field">
								<label htmlFor="name">INSPIRATION</label>
								<p>:</p>
								<input type="text" name="inspiration" value={inspiration} onChange={(e)=>{
									setInspiration(e.target.value)
								}} placeholder='(Pose, Expression, Colours, Style)' />
							</div>
							<div className="field">
								<label htmlFor="name">PAYMENT</label>
								<p>:</p>
								<div className="options">
									<button className={`btn btn-opt ${payment === 'vgen' ? 'active' : ''}`} onClick={()=>{
										setPayment('vgen')
									}}>  VGEN</button>
									<button className={`btn btn-opt ${payment === 'paypal' ? 'active' : ''}`} onClick={()=>{
										setPayment('paypal')
									}}>  PAYPAL</button>
								</div>
							</div>
					</div>
					</div>
				</div>
				<button className="btn btn-copy"
				 onClick={()=>{
					navigator.clipboard.writeText(`
						Hi, Emi! My name is ${name}, I am interested in commissioning a ${type} from you.
					  My inspiration are [${inspiration}] and I have also provided you some references: [${references}].
					  I would like to do the payment through ${payment.toUpperCase()}.

						Are you going to be available for this?
					`);
				 }}> <FaCopy/> COPY</button>
			</div>
		</CinfoLayout>
	)
}