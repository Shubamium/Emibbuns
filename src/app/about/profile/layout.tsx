import React from 'react'

type Props = {
	children:React.ReactNode
}

export default function layout({children}: Props) {
	return (
		<div className='pond-layout'>
			<div className="pond-bg"></div>
			{children}
		</div>
	)
}