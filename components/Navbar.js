import styles from './nav.module.scss'
import { useRouter } from 'next/router'
import Link from '../components/Link'


const Navbar = () => {
	const router = useRouter();
	function isActive(route) {
		console.log(route, router.pathname)
		if (route === router.pathname) {
			return "active"
		} else ""
	}
	return (
		<div className={styles.header}>
			<nav className={styles.navbar}>
				<div>
					<Link href="/">
						<a className={styles.logo}>
							Ga//uPPo
						</a>
					</Link>
				</div>
				<ul className={styles.unorderedList}>
					<li>
						<Link href="/gallery">
							<a className={styles.link}>Gallery</a>
						</Link>
					</li>
					<li>
						<Link href="/pens">
							<a className={styles.link}>Pens</a>
						</Link>
					</li>

					<li>
						<Link href="/about">
							<a className={isActive("/about") ? styles.active : styles.link}>About</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar;