// import styles from './nav.module.scss'
import { useRouter } from 'next/router'
import Link from '../Link'

import { HeaderCotainer, NavbarContainer, Logo, ListContainer, ListItem, OptionLink } from './navbar.styles'

const Navbar = () => {
	const router = useRouter();
	function isActive(route) {
		// console.log(route, router.pathname)
		if (route === router.pathname) {
			return "active"
		} else ""
	}
	return (
		<HeaderCotainer>
			<NavbarContainer>
				<div>
					<Link href="/">
						<Logo>
							Ga//uPPo
						</Logo>
					</Link>
				</div>
				<ListContainer>
					<ListItem>
						<Link href="/about">
							<OptionLink isSelected={isActive("/about") ? true : false}>About</OptionLink>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="/gallery">
							<OptionLink isSelected={isActive("/gallery") ? true : false}>Gallery</OptionLink>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="/pens">
							<OptionLink isSelected={isActive("/pens") ? true : false}>Pens</OptionLink>
						</Link>
					</ListItem>
				</ListContainer>
			</NavbarContainer>
		</HeaderCotainer>
	)
}

export default Navbar;