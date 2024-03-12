import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import GalleryDisplayer from '@/app/components/galleryDisplayer/GalleryDisplayer'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
	return (
		<ContentWrapper key='page_recent-works' className='page_recent-works center-page'>
			<GalleryDisplayer title='RECENT WORKS'>
				
			</GalleryDisplayer>
		</ContentWrapper>
	)
}