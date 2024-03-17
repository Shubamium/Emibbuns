'use client'
import React from 'react'
import PopUp from '../PopUp'
import './socialsPopUp.scss'
import { CgCross } from 'react-icons/cg';
import { GiCrossMark } from 'react-icons/gi';
import { IoCloseCircle, IoCloseOutline } from 'react-icons/io5';
import { FaCoffee, FaCrown, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
type Props = {
	isVisible:boolean;
	onClose:() => void;
}

export default function SocialsPopUp({isVisible,onClose}: Props) {
	return (
		<PopUp className='socials-pop-up' isVisible={isVisible} onClose={onClose}>
      <div className="socials-container">
				<div className="head">
					<div className="title">
						<img src="/decors/bouquet_top.png" alt="" className='decor_bouquet' />
						<img src="/decors/flower-one.svg" alt="" />
						<h2>SOCIALS</h2>
						<img src="/decors/flower-one.svg" alt="" />
					</div>
					<button className='btn btn-close' onClick={()=>{
						onClose()
					}}> <IoCloseCircle/></button>
				</div>

				<div className="socials-list">
					<div className="social btn" onClick={()=>{
						window.open('https://twitter.com/emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> TWITTER </h2>
						</div>
						<div className="body">
							<FaTwitter className='icon'/>
							<p>@emibbuns</p>
						</div>
					</div>
					<div className="social btn" onClick={()=>{
						window.open('https://www.youtube.com/@emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> YOUTUBE </h2>
						</div>
						<div className="body">
							<FaYoutube className='icon'/>
							<p>@emibbuns</p>
						</div>
					</div>
					<div className="social btn" onClick={()=>{
						window.open('https://www.tiktok.com/@emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> TIKTOK </h2>
						</div>
						<div className="body">
							<FaTiktok className='icon'/>
							<p>@emibbuns</p>
						</div>
					</div>
					<div className="social btn" onClick={()=>{
						window.open('https://www.twitch.tv/emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> TWITCH </h2>
						</div>
						<div className="body">
							<FaTwitch className='icon'/>
							<p>@emibbuns</p>
						</div>
					</div>
					<div className="social btn" onClick={()=>{
						window.open('https://ko-fi.com/emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> KO-FI </h2>
						</div>
						<div className="body">
							<FaCoffee className='icon'/>
							<p>
ko-fi.com/emibbuns
</p>
						</div>
					</div>
					<div className="social btn" onClick={()=>{
						window.open('https://throne.com/emibbuns','_blank')
					}}>
					<img src="/decors/decor_ear.png" alt="" className='decor-ear' />
						<div className="title">
							 <h2 className='type'> THRONE </h2>
						</div>
						<div className="body">
							<FaCrown className='icon'/>
							<p>throne.com/emibbuns</p>
						</div>
					</div>
				</div>
				<p className='description'>Some text about the contacts here!</p>
				{/* <div className="credit-list">
						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>

						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>

						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>
						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>
						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>
						<div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ DESIGN ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div>
				</div> */}
			</div> 
		</PopUp>
	)
}