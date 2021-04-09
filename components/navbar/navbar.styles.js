import styled from 'styled-components'

const lightGrey = '#e5e5e5';
const gray = '#6d6c6c';
const gold = '#e1cc8f';
const fontGoldCream = '#d2be8d';
const watermark = '#e1cc8f1f';

export const HeaderCotainer = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 20px 80px;
`

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Logo = styled.a`
 color: ${fontGoldCream};
 font-size: 1.2rem;
`

export const ListContainer = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
`

export const ListItem = styled.li`
	font-size: 1.1rem;
	padding: 30px;
`

export const OptionLink = styled.a`
	color: ${lightGrey};
	padding: 8px 20px;
	border: 1px solid transparent;
	text-decoration: none;
	color: ${gray};
	cursor: pointer;
	padding: 8px 20px;

	&:hover {
		color: ${gold};
		text-shadow: 1px 1px 3px #000000, -1px -1px 3px silver;
	}	
	&:active {
		color: ${gold};
		text-shadow: 1px 1px 3px silver, -1px -1px 3px #000000;
	}

	&:${({ isSelected }) => isSelected && `
		padding: 8px 20px;
		color: ${gold};
		border: 1px solid ${gray};
		border-radius: 20px;
		text-shadow: 1px 1px 3px #000000, -1px -1px 3px silver;
 `};
`