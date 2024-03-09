'use client'
import React from 'react'
import './popup.scss'
type Props = {
	children:React.ReactNode;
	onClose: () => void;
	isVisible:boolean;
	className?:string;
}

export default function PopUp({className,children,isVisible,onClose}: Props) {
	
	return (
		<div className={`popup ${className} ${isVisible ?  'visible' : 'closed'}`} onClickCapture={()=>{onClose()}}>
			{children}
		</div>
	)
}