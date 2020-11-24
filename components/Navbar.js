// import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import Link from '../components/Link'


const Navbar = () => {
	// const router = useRouter();
	// function isActive(route) {
	// 	console.log(route, router.pathname)
	// 	if (route === router.pathname) {
	// 		console.log("IF")
	// 		return "active"
	// 	} else ""
	// }
	return (
		<div>
			<nav>
				<div>
					<Link href="/">
						<a>
							Ga//uPPo
						</a>
					</Link>
				</div>
				<ul>
					<li>
						<Link href="/desinger">
							<a>Designer</a>
						</Link>
					</li>
					<li>
						<Link href="/gallery">
							<a>Gallery</a>
						</Link>
					</li>
					<li>
						<Link href="/more">
							<a>More</a>
						</Link>
					</li>
					<li>
							<Link href="/about">
								<a>About me</a>
							</Link>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
				nav {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30px 60px;
					width: 100%;
				}
				ul {
					list-style-type: none;
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}
				li {
					font-size: 0.9rem;
					padding: 30px;
				}
				li a {
					color: var(--fontLight);
					padding: 8px 20px;
					border: 1px solid transparent;
				}
				li a:hover {
					padding: 8px 20px;
					color: var(--gold);
					border: 1px solid var(--fontGray);
					border-radius: 20px;
					box-shadow: 5px 5px 20px black, -5px -5px 10px dimgray;
				}
				li a:active {
					color: var(--gold);
					border: 1px solid var(--fontGray);
					border-radius: 20px;
					box-shadow: -5px -5px 20px black, 5px 5px 10px dimgray;
				}
				li a:focus {
					outline: transparent !important;
					color: var(--gold);
					border: 1px solid var(--fontGray);
					border-radius: 20px;
					box-shadow: -5px -5px 20px black, 5px 5px 10px dimgray;
				}`
				}
			</style>
		</div>
	)
}

export default Navbar;