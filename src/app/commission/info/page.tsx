'use client'
import CinfoNavigation from '@/app/components/cinfoNavigation/CinfoNavigation'
import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import React from 'react'
import './info.scss'
import { useRouter } from 'next/navigation'

type Props = {}

export default function Page({}: Props) {
	const router = useRouter();
	return (
		<ContentWrapper key='page_comm-info' id='page_comm-info' className='comms-page center-page'>
			<CinfoNavigation/>
			<div className="info-navigation">
				<div className="col">
						<button className='btn btn-cinfo top' onClick={()=>{
							router.push('/commission/info/timeline')
						}}>
							<img src="/graphics/cinfo-crop.png" alt="" className='art' />
							<h2>TIMELINE</h2>
						</button>
						<button className='btn btn-cinfo bottom' onClick={()=>{
							router.push('/commission/info/limitation')
						}}>
							<img src="/graphics/cinfo-two.png" alt="" className='art' />
							<h2>LIMITATION</h2>
						</button>
				</div>
				<div className="col">
						<button className='btn btn-cinfo' onClick={()=>{
							router.push('/commission/info/terms')
						}}>
							<img src="/graphics/terms-banner.png" alt="" className='art' />
							<h2>TERMS & POLICY</h2>
						</button>
						<button className='btn btn-cinfo' onClick={()=>{
							router.push('/commission/info/how-to')
						}}>
							<img src="/graphics/cinfo-btn-art.png" alt="" className='art' />
							<h2>HOW TO COMMISSION</h2>
						</button>
				</div>
				<div className="col image">
					<div className="comm-info-art">
						<img src="/graphics/comm-info-art.png" alt="" />
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}