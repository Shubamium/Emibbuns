import ContentWrapper from './components/contentWrapper/ContentWrapper';
import NavigationButtons from './components/navigationButtons/NavigationButtons';
import './home.scss'

export default function Home() {
  return (
    <ContentWrapper key='page_home' className={''} id='page_home'>
			<div className="nav-part">
					<NavigationButtons/>
			</div>
			<figure className="image-part">
				<img src="/graphics/emi_fullbody.png" alt="" className='main-art' />
			</figure>
    </ContentWrapper>
  );
}
