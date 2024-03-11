import React from 'react'
import ContentWrapper from '../components/contentWrapper/ContentWrapper'
import './gallery.scss'
import GalleryDisplayer from '../components/galleryDisplayer/GalleryDisplayer'
type Props = {}

export default function Gallery({}: Props) {
	return (
		<ContentWrapper key='page_gallery' id='page_gallery' className='center-page'>
			<GalleryDisplayer title='GALLERY'/>
		</ContentWrapper>
	)
}