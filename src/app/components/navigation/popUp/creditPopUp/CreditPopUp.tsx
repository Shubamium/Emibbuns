'use client'
import React from 'react'
import PopUp from '../PopUp'
import './creditPopUp.scss'
import { CgCross } from 'react-icons/cg';
import { GiCrossMark } from 'react-icons/gi';
import { IoCloseCircle, IoCloseOutline } from 'react-icons/io5';
type Props = {
	isVisible:boolean;
	onClose:() => void;
	creditList: creditData[];
}

export type creditData ={
	artist:string,
	role:string,
	link:string,
	image:string,
}
// const creditList:creditData[] = [
// 	{
// 		artist:'Sandrinas Art',
// 		link:'https://twitter.com/SandrinasArt',
// 		role:'Design',
// 		image:'https://i.ibb.co/XZ8xG4S/7ybpa4n-M-400x400.jpg'
// 	},
// 	{
// 		artist:'WakuLive2D',
// 		role:'Model Art + Rig',
// 		link:'https://twitter.com/WakuLive2D',
// 		image:'https://i.ibb.co/Wf6Q8Bh/1-VDm-SXg-H-400x400.jpg'
// 	},{
// 		artist:'Rosuwon',
// 		role:'Stream Overlays',
// 		link:'https://twitter.com/Rosuwon',
// 		image:'https://i.ibb.co/3Y40vzR/Rp-R56b-Ex-400x400.jpg'
// 	},{
// 		artist:'Rosuwon',
// 		role:'Stream Schedule',
// 		link:'https://twitter.com/Rosuwon',
// 		image:'https://i.ibb.co/3Y40vzR/Rp-R56b-Ex-400x400.jpg'
// 	},{
// 		artist:'Rosuwon',
// 		role:'Logo',
// 		link:'https://twitter.com/Rosuwon',
// 		image:'https://i.ibb.co/3Y40vzR/Rp-R56b-Ex-400x400.jpg'
// 	},{
// 		artist:'TBA',
// 		role:'Stingers',
// 		link:'#',
// 		image:'/graphics/profile_placeholder.png'
// 	},{
// 		artist:'FuanTei',
// 		role:'Chibi Panels',
// 		link:'https://twitter.com/fu_an_tei',
// 		image:'https://i.ibb.co/gtTrvQq/h-G12k-Z3h-400x400.jpg'
// 	},{
// 		artist:'Ach',
// 		role:'Custom Alerts',
// 		link:'https://twitter.com/acharom032',
// 		image:'https://i.ibb.co/0s3MX7j/Czn-Ok-ZCM-400x400.jpg'
// 	},{
// 		artist:'TBA',
// 		role:'BGM',
// 		link:'#',
// 		image:'/graphics/profile_placeholder.png'
// 	},{
// 		artist:'Shubamium',
// 		role:'Website',
// 		link:'https://twitter.com/Shubamium2',
// 		image:'https://i.ibb.co/N91BJSJ/3-J2-G4w-Mu-400x400.jpg'
// 	}
// ]
export default function CreditPopUp({isVisible,onClose,creditList}: Props) {
	
	return (
		<PopUp className='credit-pop-up' isVisible={isVisible} onClose={onClose}>
      <div className="credit-container">
				<div className="head">
					<div className="title">
						<img src="/decors/bouquet_top.png" alt="" className='decor_bouquet' />
						<img src="/decors/flower-one.svg" alt="" />
						<h2>CREDITS</h2>
						<img src="/decors/flower-one.svg" alt="" />
					</div>
					<button className='btn btn-close' onClick={()=>{
						onClose()
					}}> <IoCloseCircle/></button>
				</div>
				<p className='description'>
					{`
						Want to know who made my dreams come true? Check out all of my super talented artists! They made my visions come to life and helped me express myself and create Emi, no matter how big or small their creation. Your skill and talents will never be forgotten, your creations will always be admired here, Thank you. ♡
					`}
				</p>
				<div className="credit-list">
						{
							creditList?.map((credit,index)=>{
								return (
									<div className="credit btn"
									key={'credit-item-'+index+credit.artist}
									onClick={()=>{
										window.open(credit.link)
									}}>
										<div className="credit-head">
											<h2 className='role'>✿ {credit.role} ✿</h2>
											<p>{credit.artist}</p>
										</div>
										<div className="credit-body">
											<img src={credit.image} alt="" className='pfp' />
											<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
										</div>
									</div>
								)
							})
						}

						{/* <div className="credit btn"
						onClick={()=>{
							window.open('https://twitter.com/person_name')
						}}>
							<div className="credit-head">
								<h2 className='role'>✿ https://twitter.com/Rosuwon ✿</h2>
								<p>@person_name</p>
							</div>
							<div className="credit-body">
								<img src="/graphics/profile_placeholder.png" alt="" className='pfp' />
								<img src="/decors/flower_two.svg" alt="" className='decor_flower' />
							</div>
						</div> */}

				</div>
			</div> 
		</PopUp>
	)
}