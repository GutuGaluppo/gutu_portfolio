import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'


export default function Index() {
	return (
		<div>
			<Head>
				<title>Gutu Galuppo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Navbar />
				<Home />
			</div>
		</div>
	)
}
