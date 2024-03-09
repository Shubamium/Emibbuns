'use client'
import {motion } from 'framer-motion'
import React from 'react'

type Props = {
	children?:React.ReactNode
	className?:string;
	key:string
	id?:string;
}

export default function ContentWrapper({
	children,
	className,
	key,
	id
}: Props) {
	return (
		<motion.main 
			initial={{
				y:-200,
				opacity:0
			}}
			animate={{
				y:0,
				opacity:1,
			}}
			exit={{
				x:-200,
				opacity:0
			}}
			transition={{
				duration:.5
			}}
			className={className}
			key={key}
			id={id}
		>
			{children}
		</motion.main>
	)
}