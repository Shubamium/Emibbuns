'use client'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './story.scss'
import { useRouter } from 'next/navigation'
import { BsFlower1, BsFlower2 } from 'react-icons/bs'
import { GiFlowerEmblem } from 'react-icons/gi'
import { IoFlower } from 'react-icons/io5'
import { AnimatePresence } from 'framer-motion'

import {motion} from 'framer-motion'
type Props = {}

export default function Page({}: Props) {
	const router = useRouter()
	
	const [isViewingStory, setIsViewingStory] = useState(false)
	const [activeStory, setActiveStory] = useState(0)

	const viewStory = (chapter:number)=>{
		setIsViewingStory(true)
		setActiveStory(chapter)
	}
	return (
		<main id='page_story'>
			<AnimatePresence>
				{isViewingStory ? (
						<div className="story-view" key={'story-viewer'}>
							<h2>hey</h2>
						</div>
					) 
					: (
						<motion.div className="story-list" key={'story-list'}
							initial={
								{
									y:100,
									opacity:0
								}
							}
							animate={{
								y:0,
								opacity:1
							}}
							exit={{
								y:-100,
								opacity:0
							}}
						>
							<div className="head">
								<button className='btn btn-back' onClick={()=>{
									router.push('/about')
								}}> <FaArrowLeft/></button>
								<div className="title">
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
									<h2>STORY</h2>
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
								</div>
							</div>
							<p className='description'>
								Some text about this section here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex.
							</p>

							<div className="stories">
								<div className="story btn" onClick={()=>{
										viewStory(0)
								}}>
									<div className="head">
										<IoFlower/>
										<h2>Chapter Title</h2>
										<IoFlower/>
									</div>
									<div className="chapter-image">
										<img src="/graphics/banner_placeholder.png" alt="" className='chapter-img-el' />
									</div>
								</div>
								<div className="story btn" onClick={()=>{
										viewStory(0)
								}}>
									<div className="head">
										<IoFlower/>
										<h2>Chapter Title</h2>
										<IoFlower/>
									</div>
									<div className="chapter-image">
										<img src="/graphics/banner_placeholder.png" alt="" className='chapter-img-el' />
									</div>
								</div>
								<div className="story btn" onClick={()=>{
										viewStory(0)
								}}>
									<div className="head">
										<IoFlower/>
										<h2>Chapter Title</h2>
										<IoFlower/>
									</div>
									<div className="chapter-image">
										<img src="/graphics/banner_placeholder.png" alt="" className='chapter-img-el' />
									</div>
								</div>
						
							</div>
						</motion.div>
					)}
			</AnimatePresence>
		</main>
	)
}