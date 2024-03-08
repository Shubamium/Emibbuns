import React from 'react'
import './popup.scss'
type Props = {
	children:React.ReactNode;
}

export default function PopUp({children}: Props) {
	return (
		<div className='popup'>
			{children}
		</div>
	)
}