import { Download, SectionWrapper, Features } from "./components"
import assets from "./assets"
import styles from "./styles/Global"

const App = () => {
	return (
		<div className="App">
			<SectionWrapper
				title="Your Own Store of Nifty NFTs. Start Selling and Growing"
				description="Buy, Store, collect NFTs, exchange and earn crypto. Join 25+ million people using Nifty Gifty."
				showBtn
				mockupImg={assets.homeHero}
				banner="banner"
			/>
			<SectionWrapper
				title="Smart user Interface Marketplace"
				description="Experience a buttery UI of Nifty Gifty. Smooth constant colors of a fluent UI design."
				mockupImg={assets.homeCards}
				reverse
			/>
			<Features />
			<SectionWrapper
				title="Deployment"
				description="Nifty Gifty built using Expo which runs natively on all user devices. Get your app easily into people's hands."
				mockupImg={assets.feature}
				reverse
			/>
			<SectionWrapper
				title="Creative way to showcase the store"
				description="The app contains 2 screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
				mockupImg={assets.mockup}
				banner="banner02"
			/>
			<Download link="https://github.com/warmachine028" />
			
			<div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
				<p className={`${styles.pText} ${styles.whiteText}`} >
					Made with 💖 by <span className="bold">Pritam Kundu</span>
				</p>
			</div>
		</div>
	)
}

export default App
