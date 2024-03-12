'use client'
import { urlFor } from '@/db/db'
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

type Props = {
	family:{
		name:string,
		title:string,
		age:string,
		height:string,
		banner:any,
		description:string,
	}[],
}

const chunkIntoN = <T,>(arr:T[], n:number) =>
	Array.from({ length: Math.ceil(arr.length / n) }, (v, i) =>
		arr.slice(i * n, i * n + n)
	)


export default function FamilyList({family}: Props) {
	const [activePage, setActivePage] = useState(0)
	const chunks = chunkIntoN(family,2)
	// console.log(chunks);

	const prev = () =>{
		setActivePage(Math.max(activePage-1,0))
	}
	const next = () =>{
		setActivePage(Math.min(activePage+1,chunks.length-1))
	}
	return (
		<>
				<div className="action">
						<button className='btn btn-fam l' onClick={prev}> <FaArrowLeftLong/></button>
						<button className='btn btn-fam r' onClick={next}> <FaArrowRightLong/></button>
					</div>
					<div className="family-list">
						{/* <div className="family">
							<div className="image">
								<img src="/graphics/mascot-sample.png" alt="" />
							</div>
							<div className="detail">
								<div className="name">
									<p>Bunny Companion</p>
									<h2>BO</h2>
								</div>
								<div className="phys-detail">
									<p className='age'>5 YEARS OLD</p>
									<p className='height'>2’11</p>
								</div>
							</div>
							<div className="family-desc">
								<p>Evangeline is Emi’s spirit sister from the forest. They got separated when fleeing from the hunters and Evangeline had been searching for Emi ever since. Now that they’ve found each other Evangeline likes to play games and dance with Emi whenever they get the chance. It reminds her of the time when they used to live in the forest. Evangeline loves the ocean and to play with seashells and jellyfish. </p>
							</div>
						</div> */}
						{chunks[activePage].map((chunk,index)=>{
							return (
								<div className="family" key={chunk.name+'-'+index}>
								<div className="image">
									<img src={urlFor(chunk.banner).url()} alt="" />
								</div>
								<div className="detail">
									<div className="name">
										<p>{chunk.title}</p>
										<h2>{chunk.name}</h2>
									</div>
									<div className="phys-detail">
										<p className='age'>{chunk.age}</p>
										<p className='height'>{chunk.height}</p>
									</div>
								</div>
								<div className="family-desc">
									<p>{chunk.description}</p>
								</div>
								</div>
							)
						})}
					</div>
		</>
	)
}