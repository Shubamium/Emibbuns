import React from 'react'
import './cinfoLayout.scss'
import CinfoNavigation from '../cinfoNavigation/CinfoNavigation'
import ContentWrapper from '../contentWrapper/ContentWrapper'
type Props = {
	children:React.ReactNode,
	id:string,
	title:string,
	description:string,
}

export default function CinfoLayout({
	children,
	id,
	title,
	description,

}: Props) {
	return (
		<ContentWrapper key='cinfo_layout' id={id} className='cinfo-layout center-page'>
			<CinfoNavigation/>
			<div className="cinfo-panel">
				<div className="cinfo-header">
						<h2>{title}</h2>
						<p>{description}</p>
				</div>
				{children}
			</div>
		</ContentWrapper>
	)
}