'use client'
import React, { useEffect, useState } from 'react'
import'./loading.scss'
type Props = {}

export default function Loading({}: Props) {
	const [isLoaded,setIsLoaded] = useState(false);
	useEffect(()=>{
		setTimeout(()=>{
			setIsLoaded(true)
		},4000)	
	},[])
	return (
		<div className={`loading-container ${ isLoaded ? 'loaded' : ''}`}>
			<div className="window l">
				<img src="/decors/loading-window.png" alt="" className='loading-window l' />
			</div>
			<div className="window r">
				<img src="/decors/loading-window.png" alt="" className='loading-window r' />
			</div>
			<div className="loading-info">
				<p>Loading . . .</p>
				<img src="/decors/subsitute.png" alt="" />
			</div>
		</div>
	)
}