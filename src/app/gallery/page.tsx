import React from 'react'
import ContentWrapper from '../components/contentWrapper/ContentWrapper'
import './gallery.scss'
import GalleryDisplayer from '../components/galleryDisplayer/GalleryDisplayer'
import { fetchData } from '@/db/db'
type Props = {}

export default async function Gallery({}: Props) {
	const data = await fetchData<any[]>(`
	*[_type == 'gallery'] {
		artist,
		link,
		art
	}
	`);
	console.log(data)
	return (
		<ContentWrapper key='page_gallery' id='page_gallery' className='center-page'>
			<GalleryDisplayer title='GALLERY' imageList={data}/>
		</ContentWrapper>
	)
}