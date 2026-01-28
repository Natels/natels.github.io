import Link from 'next/link'

export default function Nav() {
	return (
		<nav className="pixel-nav">
			<Link href="/">Home</Link>
			<Link href="/tic-tac-toe">Games</Link>
			<Link href="/language">Language</Link>
			<Link href="/tactical">Projects</Link>
		</nav>
	)
}
