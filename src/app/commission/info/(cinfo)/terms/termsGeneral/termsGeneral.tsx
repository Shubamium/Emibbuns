
type Props = {}
import { TbCurrencyDollarOff } from 'react-icons/tb'
import './termsGeneral.scss'
import { GiFlowerEmblem, GiFlowerPot, GiRabbit } from 'react-icons/gi'
import { BiEdit } from 'react-icons/bi'
import { CgCopy } from 'react-icons/cg'

export default function TermsGeneral({}: Props) {
	return (
		<div className="terms-general">
			<div className="top">
				<div className="col left">
					<div className="term">
						<div className="icon">
							<TbCurrencyDollarOff/>
						</div>
						<h2>Once I finish the sketch, there are NO REFUNDS.</h2>
					</div>
				</div>
				<div className="col center">
					<div className="term side">
						<div className="icon">
							<GiFlowerPot/>
						</div>
						<div className="text-par">
							<h2>You must pay a commercial charge to use my artwork on merchandise.  </h2>
							<p>(This will vary; currently no commercial merchandise use available)</p>
						</div>
					</div>
					
					<div className="term side">
						<div className="icon">
							<GiFlowerPot/>
						</div>
						<div className="text-par">
							<h2>I reserve the right to put my work on my social media,  </h2>
							<p>but if there is a reason why you {`don't`} want me to, please let me know!</p>
						</div>
					</div>
				</div>
				<div className="col right">
					<div className="term">
							<div className="icon">
								<CgCopy/>
							</div>
							<h2>Do not copy or claim my art as your own.</h2>
						</div>
				</div>
			</div>
			<div className="bottom">
				<div className="col left">
					<div className="term">
							<div className="icon">
								<BiEdit/>
							</div>
							<h2>You cannot change the art without my permission..</h2>
						</div>
				</div>
				<div className="col right">
					<div className="term side">
							<div className="icon">
								<GiFlowerEmblem/>
							</div>
							<div className="text-part">
							<h2>Anything made by emibbuns (me) can NOT be used in Artificial Intelligence (A.I) generating sites or ANY block-chain related Technology,</h2>
							<p> including any form of NFTS, cryptocurrency or future inventions in the space.</p>
							</div>
						</div>
						<div className="term side">
							<div className="icon">
								<GiRabbit/>
							</div>
							<h2>I am always improving, therefore my style may occasionally vary.</h2>
						</div>
				</div>
			</div>
		</div>
	)
}