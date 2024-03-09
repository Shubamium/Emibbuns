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


const stories = [
	{
		title:'Chapter 1',
		text:[
			`Just like humans, each fae is unique. There are tales of evil in this world, no it is not one of supernaturals wanting world domination. This tale is one of humans trying to grow stronger than they already are, they are greedy and just want power. 
			Even though someone can go through so many bad things they can still be happy and move forward. Emi, is a reckless fae, she always has been. She likes to have fun and explore. It could be because she was created to make others happy or it could be she is just a creature that enjoys life to its fullest and wants to continue to enjoy it to its fullest. As Emi was enjoying life there was a dark society that was on the hunt for creatures like, mystical creatures, they believed that these creatures were the key to the power that can help them rule the world. Why was this group wanting power to rule the world?`,
			`What happened to them to make them believe in mystical beings, try to capture them, collect them, and try to extract power? Well, they all got fired for various reasons and think the world is against them. So for many years this society has been building over the years and has had enough private investors to start research and capturing the creatures. The next year for the group would be spent finding mystical creatures and researching their habits. They would then start to capture the creatures. 
			`
		]
	},
	{
		title:'Chapter 2',
		text:[
			`Soon it was time to capture Emi, they captured her after shooting her with a dart of a chemical that would turn her human a little bit but enough to keep the mystical essence in her there still.
			She was too strong for the sedative but the chemicals coursed throughout her body and she was in this form. A witch would come over and knock out the “scientist” and then would take her away to her house. She would be explained what those men were trying to do, of course, Emi was horrified and struggled to believe it but once she calmed down she came to a realization. If she can make people happy then the evil men will go away.
			`,
			`The witch gave her human clothes and told her about the human world and how she will have to find her own way back to the magical side of the world but till then she should try her best to get along with humans.
			Emi did not want to just get along with the humans she wanted to make them happy. The witch gave her money, a job, and a place to stay at. 
			Sadly when Emi tries to go back to her rabbit form she can not turn fully into a rabbit but her outfit is changed into a more mystical outfit.
			Emi is now living in the place she was given and is streaming as a VTuber. She became a VTuber because she knows this is a great way to become famous and make people happy.
			`
		]
	}
]
export default function Page({}: Props) {
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
		<main id='page_story'>
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
													<img src="/graphics/banner_placeholder.png" alt="" className='chapter-img-el' />
												</div>
											</div>
									
										)
									})
								}
							
							
							</div>
						</motion.div>
					)}
			</AnimatePresence>
		</main>
	)
}