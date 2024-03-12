import StorySelector from "./storySelector/StorySelector"
import './story.scss'
import { fetchData } from "@/db/db"

type Props = {}


const stories = [
	{
		title:'Chapter 1',
		text:[
			`Just like humans, each fae is unique. There are tales of evil in this world, no it is not one of supernaturals wanting world domination. This tale is one of humans trying to grow stronger than they already are, they are greedy and just want power. 
			Even though someone can go through so many bad things they can still be happy and move forward. Emi, is a reckless fae, she always has been. She likes to have fun and explore. It could be because she was created to make others happy or it could be she is just a creature that enjoys life to its fullest and wants to continue to enjoy it to its fullest. As Emi was enjoying life there was a dark society that was on the hunt for creatures like, mystical creatures, they believed that these creatures were the key to the power that can help them rule the world. Why was this group wanting power to rule the world?`,
			`What happened to them to make them believe in mystical beings, try to capture them, collect them, and try to extract power? Well, they all got fired for various reasons and think the world is against them. So for many years this society has been building over the years and has had enough private investors to start research and capturing the creatures. The next year for the group would be spent finding mystical creatures and researching their habits. They would then start to capture the creatures. 
			`
		]
	},
	{
		title:'Chapter 2',
		text:[
			`Soon it was time to capture Emi, they captured her after shooting her with a dart of a chemical that would turn her human a little bit but enough to keep the mystical essence in her there still.
			She was too strong for the sedative but the chemicals coursed throughout her body and she was in this form. A witch would come over and knock out the “scientist” and then would take her away to her house. She would be explained what those men were trying to do, of course, Emi was horrified and struggled to believe it but once she calmed down she came to a realization. If she can make people happy then the evil men will go away.
			`,
			`The witch gave her human clothes and told her about the human world and how she will have to find her own way back to the magical side of the world but till then she should try her best to get along with humans.
			Emi did not want to just get along with the humans she wanted to make them happy. The witch gave her money, a job, and a place to stay at. 
			Sadly when Emi tries to go back to her rabbit form she can not turn fully into a rabbit but her outfit is changed into a more mystical outfit.
			Emi is now living in the place she was given and is streaming as a VTuber. She became a VTuber because she knows this is a great way to become famous and make people happy.
			`
		]
	}
]
export default async function Page({}: Props) {
	const data = await fetchData<any>(`
	*[_type == 'story'] {
		title,
		banner,
		text
	}
	`);
	return (
		<main id='page_story'>
				<StorySelector stories={data.reverse()}></StorySelector>
		</main>
	)
}