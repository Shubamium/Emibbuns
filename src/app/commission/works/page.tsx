import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import GalleryDisplayer from '@/app/components/galleryDisplayer/GalleryDisplayer'
import { fetchData } from '@/db/db';
import React from 'react'

type Props = {}

export default async function Page({}: Props) {
	const data = await fetchData<any[]>(`
	*[_type == 'recent'] {
		artist,
		link,
		art
	}
	`);
	return (
		<ContentWrapper key='page_recent-works' className='page_recent-works center-page'>
			<GalleryDisplayer title='RECENT WORKS' imageList={data}>
				
			</GalleryDisplayer>
		</ContentWrapper>
	)
}