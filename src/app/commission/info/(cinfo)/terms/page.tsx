'use client'

import CinfoLayout from '@/app/components/cinfoLayout/CinfoLayout'
import React, { useState } from 'react'
import './terms.scss'
import TermsGeneral from './termsGeneral/termsGeneral'
import TermsCrediting from './termsCrediting/TermsCrediting'
import TermsPayment from './termsPayment/TermsPayment'
import TermsArt from './termsArt/TermsArt'

type Props = {}

export default function Page({}: Props) {

	const [activeMenu,setActiveMenu] = useState('general')
	return (
		<CinfoLayout id='page_terms' 
			title='Terms & Policy'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sagittis dolor. Mauris at metus ac mi laoreet eleifend. Maecenas porta, velit quis sollicitudin sagittis, odio sem dictum ex, a consequat diam justo quis nisi.'
			>
			<div className="content">
				<div className="navigation">
					<button onClick={()=>{
						setActiveMenu('general')
					}} className={`btn btn-terms ${activeMenu === 'general' ? 'active' : ''}`}>✿ GENERAL</button>
					<button onClick={()=>{
						setActiveMenu('crediting')
					}} className={`btn btn-terms ${activeMenu === 'crediting' ? 'active' : ''}`}>✿ CREDITING</button>
					<button onClick={()=>{
						setActiveMenu('payment')
					}} className={`btn btn-terms ${activeMenu === 'payment' ? 'active' : ''}`}>✿ PAYMENT</button>
					<button onClick={()=>{
						setActiveMenu('art')
					}} className={`btn btn-terms ${activeMenu === 'art' ? 'active' : ''}`}>✿ ART</button>
				</div>
				<div className="active-menu">
					{activeMenu === 'general' && <TermsGeneral/>}
					{activeMenu === 'crediting' && <TermsCrediting/>}
					{activeMenu === 'payment' && <TermsPayment/>}
					{activeMenu === 'art' && <TermsArt/>}
				</div>
			</div>
		</CinfoLayout>
	)
}