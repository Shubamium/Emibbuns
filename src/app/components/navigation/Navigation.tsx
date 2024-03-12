'use client'
import React, { useEffect, useState } from 'react'
import './navigation.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavigationPopUp from './popUp/navigationPopUp/NavigationPopUp'
import CreditPopUp from './popUp/creditPopUp/CreditPopUp'
import SocialsPopUp from './popUp/socialsPopUp/SocialsPopUp'
import Link from 'next/link'
type Props = {}



export default function Navigation({}: Props) {

	const [isNavOpen, setIsNavOpen] =  useState(false);
	const [isCreditOpen, setIsCreditOpen] =  useState(false);
	const [isSocialOpen, setIsSocialOpen] =  useState(false);
	useEffect(()=>{
		const openCredit =()=>{
			setIsCreditOpen(true)
		}
		document.addEventListener('openCredit',openCredit)
		return ()=>{
			document.removeEventListener('openCredit',openCredit);
		}
	},[])
	return (
 		<header id='header'>
			<div className="top-r">
				<nav>
					<svg className='nav-bg' width="203" height="161" viewBox="0 0 203 161" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clip-rule="evenodd" d="M88.3896 100.748C57.0487 137.485 8.94107 161 -45 161C-107.444 161 -162.07 129.487 -191.917 82.4315C-199.658 84.112 -207.719 85 -216 85C-275.094 85 -323 39.7808 -323 -16C-323 -71.7808 -275.094 -117 -216 -117C-200.242 -117 -185.28 -113.785 -171.81 -108.011C-140.52 -140.555 -95.2961 -161 -45 -161C8.94107 -161 57.0487 -137.485 88.3896 -100.748C90.9034 -100.915 93.4412 -101 96 -101C155.094 -101 203 -55.7808 203 0C203 55.7808 155.094 101 96 101C93.4412 101 90.9034 100.915 88.3896 100.748Z" fill="#60915A"/>
					</svg>
					<div className="nav-action">
						<h2>NAVIGATION</h2>
						<button onClick={()=>{
							setIsNavOpen(true)
						}} className="btn btn-nav">
							<GiHamburgerMenu/>
						</button>
						
					</div>
				</nav>
			</div>

			<div className="bottom-r">
				<Link href='/'  className="logo">
					<img src="/decors/nav-logo-circle.png" alt="" className='decor_circle' />
					<img src="/graphics/logo_main.png" alt="" className='decor_logo' />
				</Link>
			</div>
			<div className="bottom-l">
					<img src="/graphics/mascot-bo.png" alt="bo" className='nav-bo ni' />
				<div className="action">
					<a href='https://vgen.co/emibbuns' target='_blank' className='btn vgen'> ORDER ON VGEN </a>
					<button onClick={()=>{
						setIsCreditOpen(true) 
					}} className='btn'> CREDITS </button>
					<button className='btn 'onClick={()=>{
						setIsSocialOpen(true)
					}}> SOCIALS </button>
				</div>
			</div>
				<NavigationPopUp isVisible={isNavOpen} onClose={()=>{
					setIsNavOpen(false)
				}}/>
				<CreditPopUp isVisible={isCreditOpen} onClose={()=>{
					setIsCreditOpen(false)
				}}/>
				<SocialsPopUp isVisible={isSocialOpen} onClose={()=>{
					setIsSocialOpen(false)
				}}/>
		</header>
	)
}