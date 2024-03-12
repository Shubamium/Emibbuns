import ContentWrapper from '@/app/components/contentWrapper/ContentWrapper'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './family.scss'
import { fetchData } from '@/db/db'
import FamilyList from './familyList/FamilyList'
type Props = {}

export default async function Family({}: Props) {

		const data = await fetchData<any>(`
		*[_type == 'family'] {
			name,
			title,
			age,
			height,
			banner,
			description
		}
		`)
		console.log(data);
	return (
		<ContentWrapper key='page_family' id='page_family'>
			<div className="family-panel">
					<div className="head">
								<Link href={'/about'} className='btn btn-back'> <FaArrowLeft/></Link>
								<div className="title">
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
									<h2>FAMILY</h2>
									<div className="icon">
										<img src="/decors/flower_three.svg" alt="" />
									</div>
								</div>
					</div>
					<p className='description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi. Phasellus ex ipsum, volutpat at purus ornare, condimentum rutrum tellus.
					</p>
					<FamilyList family={data}/>
			</div>
		</ContentWrapper>
	)
}