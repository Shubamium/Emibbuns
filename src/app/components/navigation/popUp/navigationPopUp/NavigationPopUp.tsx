import React from 'react'
import PopUp from '../PopUp'
import './navigationPopUp.scss'
import NavigationButtons from '@/app/components/navigationButtons/NavigationButtons';
type Props = {
	onClose: () => void;
	isVisible: boolean;
}

export default function NavigationPopUp({onClose,isVisible}: Props) {

	return (
		<PopUp className='nav-pop-up' isVisible={isVisible} onClose={onClose}>
			<NavigationButtons/>
		</PopUp>
	)
}