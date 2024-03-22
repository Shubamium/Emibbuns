'use client'
import React, { useEffect, useState } from 'react'
import PopUp from '../PopUp'
import './galleryPopUp.scss'
type Props = {}

export default function GalleryPopUp({}: Props) {
	const [isVisible,setIsVisible] = useState(false)
	const [image,setImage] = useState('')
	const onClose = () =>{
		setIsVisible(false)
	}

	useEffect(()=>{
		document.body.addEventListener('modal_gallery',(data:any)=>{
				setIsVisible(true)
				setImage(data.detail.image)
				console.log(data.detail.image)
		})
	},[])
	return (
		<PopUp className='gallery-popup' isVisible={isVisible} onClose={onClose}>
				{/* <div className="container"> */}
					{/* a */}
				{/* </div> */}
				<img src={image} alt="" className='main-image'  onClick={onClose}/>
		</PopUp>
	)
}