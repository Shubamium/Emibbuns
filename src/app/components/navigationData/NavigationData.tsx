import React from 'react'
import Navigation from '../navigation/Navigation'
import { fetchData, urlFor } from '@/db/db'
import { creditData } from '../navigation/popUp/creditPopUp/CreditPopUp';

type Props = {}

export default async function NavigationData({}: Props) {
	const creditData = await fetchData<any[]>(`
		*[_type == "credits"]{
			name,
			role,
			link,
			pfp
		}
	`);
	const creditList:creditData[] = creditData.map((credit)=>{
		return {
			artist:credit.name,
			image:urlFor(credit.pfp).url(),
			role:credit.role,
			link:credit.link
		}
	})

	const socials= await fetchData<any[]>(`
		*[_type == "socials"]{
			name,
			handle,
			link,
			icon
		}
	`);
	
	const generalData = await fetchData<any[]>(`
		*[_type == "general" && preset == "main"]{
			reference_sheet
		}
	`);
	const socialList = socials.map((social)=>{
		return {
			name:social.name,
			handle:social.handle,
			link:social.link,
			icon:urlFor(social.icon).url()
		}
	})
	console.log(generalData)
	const general = generalData[0]
	return (
		<Navigation reference_sheet={general.reference_sheet ?  urlFor(general.reference_sheet).url() : ''} creditData={creditList} socialData={socialList}/>
	)
}