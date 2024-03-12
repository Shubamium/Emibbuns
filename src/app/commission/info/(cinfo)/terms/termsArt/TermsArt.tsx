import React from 'react'
import './termsArt.scss'
type Props = {}

export default function TermsArt({}: Props) {
	return (
		<div className='terms-art'>
			<div className="left">
				<div className="term">
					✿ You may choose a pose(s); if not, I will choose one for you.
				</div>
				<div className="bottom">
					<div className="img-part">
						<img src="/graphics/revision-arttwo.png" alt="" />
					</div>
					<div className="revision">
						<h2>REVISIONS</h2>
						<p>Revisions after the sketch will cost an <strong> extra $5 </strong> <u> unless the error is my fault.</u></p>
						<div className="example">
							<h2>Revision Example:</h2>
							<p>New pose, Different features/expressions on the character, etc.</p>
						</div>
						<img src="/graphics/revision-art.png" alt="" />
					</div>
				</div>
			</div>
			<div className="right">
				<img src="/graphics/terms_art-art.png" alt="" />
			</div>
		</div>
	)
}