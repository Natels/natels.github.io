import '../components/tictactoe/index.css'
import { Nanum_Pen_Script } from "next/font/google"

const font = Nanum_Pen_Script({
	subsets: ['latin'],
	weight: '400'
})

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={font.className}>
			<Component {...pageProps} />
		</main>
	)
}
