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
}

export default function CreditPopUp({isVisible,onClose}: Props) {
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
				<p className='description'>Some text about the people here!</p>
				<div className="credit-list">
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
				</div>
			</div> 
		</PopUp>
	)
}