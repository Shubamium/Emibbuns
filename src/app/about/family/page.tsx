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
						Memories are cherished, and love knows no bounds! Join Emi as she invites you into her family, a place where warmth, laughter, and togetherness gather. From heartwarming stories to silly facts, this page is a place where family stays. Learn more about Emi’s family below.
					</p>
					<FamilyList family={data}/>
			</div>
		</ContentWrapper>
	)
}