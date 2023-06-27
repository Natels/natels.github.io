import '../components/tictactoe/index.css'
import { Slackside_One } from "next/font/google"

const font = Slackside_One({
	subsets: ['latin', 'latin-ext'],
	weight: '400'
})

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={font.className}>
			<Component {...pageProps} />
		</main>
	)
}
