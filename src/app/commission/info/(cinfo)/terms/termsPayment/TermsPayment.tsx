import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import './termsPayment.scss'
type Props = {}

export default function TermsPayment({}: Props) {
	return (
		<div className='terms-payment'>
			<div className="terms-list">
				<div className="terms">
					✿ Commercial prices and use are <strong>currently not avaliable</strong>. 
				</div>
				<div className="terms">
					✿ Commercial prices and use are currently not avaliable. 
				</div>
				<div className="terms">
				✿ The complexity of the design may lead to <strong>increased prices</strong>. 
				</div>
				<div className="terms">
				✿ Any commission that makes me <u>feel uneasy</u> or <u>goes against my personal boundaries</u> is subject to my right to decline your commission. <strong>No NSFW commissions</strong> will be accepted by me.
				</div>
				<div className="terms">
				✿ <b>You must provide references;</b> I will charge +25% more if you only <u>provide a text description</u>.
				</div>
				<div className="terms">
				✿ Please {` don't `}try to negotiate my prices or pressure me to finish your commission quickly. 
				<br />
				<p>If you do I will <strong>mark your commission as a rush order</strong> and will charge you the rush order fee. </p>
				</div>
			</div>
			<div className="other">
				<div className="panel top">
					<p>If you have any queries or worries, you are more than welcome to get in touch with me via Twitter {`DM's`}, Discord or Email.</p>
					<p className='email'>EMAIL:  your.email@emibbuns.co</p>
					<div className="btn btn-message">
						✿ SEND ME A MESSAGE <FaArrowRightLong/>
					</div>
				</div>
				<div className="panel bottom">
					<h2> ✿ RUSH ORDERS </h2>
					<p>Insisting a commission while my commissions are not open will be considered a rush order.</p>
					<div className="points">
						<div className="point">
								<div className="percentage">
									<p>+25%</p>
								</div>
							<div className="detail">
								<h2>LOGOS & GRAPHICS</h2>
								<p>EX: $10 <FaArrowRight/> $12.50</p>
							</div>
						</div>
						<div className="point">
								<div className="percentage">
									<p>+50%</p>
								</div>
								<div className="detail">
									<h2>LOGOS & GRAPHICS</h2>
									<p>EX: $20 <FaArrowRight/> $30</p>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}