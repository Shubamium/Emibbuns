import React from 'react'
import './termsCrediting.scss'
type Props = {}

export default function TermsCrediting({}: Props) {
	return (
		<div className='terms-crediting'>
			<p className='top-text'>
			You may use the artwork {`I've`} created for you wherever you like <strong>(Twitter, Discord, Twitch, etc.)</strong>, <u>as long as you give me clear credit.</u>
			</p>
			<img src="/graphics/terms-banner.png" alt="" />
			<p className='bottom-text'>
				This entails including both a reference to me <strong>{`(ex. "pfp by @emibbuns")`}</strong> and a proper <strong>link/mention</strong> to my <strong>Twitter profile</strong> in a visible place.
			</p>
		</div>
	)
}