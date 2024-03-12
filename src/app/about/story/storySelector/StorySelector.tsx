
'use client'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { BsFlower1, BsFlower2 } from 'react-icons/bs'
import { GiFlowerEmblem } from 'react-icons/gi'
import { IoFlower } from 'react-icons/io5'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'
import { urlFor } from '@/db/db'

type Props = {
	stories:{
		title:string,
		banner:any,
		text:string[]
	}[]
}
export default function StorySelector({stories}: Props) {
	const router = useRouter()
	
	const [isViewingStory, setIsViewingStory] = useState(false)
	const [activeStory, setActiveStory] = useState(0)
	const [activePage, setActivePage] = useState(0)

	const viewStory = (chapter:number)=>{
		setIsViewingStory(true)
		setActiveStory(chapter)
	}
	const viewList = () =>{
		setIsViewingStory(false)
		setActiveStory(0);
		setActivePage(0);
	}

	const nextPage = () =>{
		setActivePage(Math.min(activePage+1,stories[activeStory].text.length-1))
	}
	const prevPage = () =>{
		setActivePage(Math.max(activePage-1,0))
	}
	return (
		<AnimatePresence mode='wait'>
		{isViewingStory ? (
				<motion.div 
					initial={
						{
							y:-100,
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
					transition={{
						duration:.5
					}}
				className="story-view" key={'story-viewer'}>
					<article className='text-part'>
							<div className="book-part">
								<h2>{stories[activeStory].title} ✿</h2>
								<hr />
								<p className='story'>
										{stories[activeStory].text[activePage]}
								</p>

							</div>
							<div className="action">
								<button className='btn btn-story-nav' disabled={activePage === 0} onClick={prevPage}> <FaArrowLeft/></button>
								<p>{activePage+1}/{stories[activePage].text.length}</p>
								<button className='btn btn-story-nav' disabled={activePage === stories[activeStory].text.length-1} onClick={nextPage}> <FaArrowRight/></button>
							</div>
					</article>
					<figure className='art-part'>
							<img src="/graphics/sleeping.png" alt="" className='story-art' />
					</figure>
					<div className="btn btn-back" onClick={viewList}><FaArrowLeft/> Chapter List</div>
				</motion.div>
			) 
			: (
				<motion.div className="story-list" key={'story-list'}
					initial={
						{
							y:100,
							opacity:0,
						}
					}
					animate={{
						y:0,
						opacity:1
					}}
					exit={{
						y:100,
						opacity:0
					}}
					transition={{
						duration:.5
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
						{
							stories.map((story,index)=>{
								return (
										<div key={'story-chapter-'+index} className="story btn" onClick={()=>{
											viewStory(index)
									}}>
										<div className="head">
											<IoFlower/>
											<h2>{story.title}</h2>
											<IoFlower/>
										</div>
										<div className="chapter-image">
											<img src={urlFor(story.banner).url()} alt="" className='chapter-img-el' />
										</div>
									</div>
							
								)
							})
						}
					
					
					</div>
				</motion.div>
			)}
	</AnimatePresence>
	)
}