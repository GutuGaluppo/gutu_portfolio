import styled from 'styled-components'

const lightGrey = '#e5e5e5';

export const AboutContainer = styled.div`
	width: 100vw;
	height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionContainer = styled.section`
	position: relative;
	margin: auto;
  min-width: 1200px;
  height: 100%;
  max-width: 1200px;
  max-height: 75%;
  background: linear-gradient(to bottom right, #4b4c4e, #0f1012);
  box-shadow: 20px 20px 50px #232323;
`

export const AsideRightContainer = styled.aside`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 0.7rem;
	font-weight: 300;
	color: white;

	transform: rotate(-90deg);

	width: 50%;
	top: 50%;
	left: -18%;

	& > p {
		text-align: center;
		font-size: 20px;
		position: relative;
	}

`

export const Instagram = styled.p`
	&::before {
		content: '';
		position: absolute;
		width: 90px;
		height: 1px;
		background: #fff;
		opacity: .5;
		top: 8px;
		left: -130px;
	}
`

export const GoldSphere = styled.div`
	width: 12px;
  height: 12px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  margin: 30px;
`

export const Linkedin = styled.p`
	&::before {
		content: '';
		position: absolute;
		width: 90px;
		height: 1px;
		background: #fff;
		opacity: .5;
		top: 8px;
		left: 70px;
	}
`
export const CenterDiv = styled.div`
	position: absolute;
	width: 70%;
	left: 15%;

  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const InfoDiv = styled.div`
	max-width: 450px;

	& > p {
		font-weight: 400;
		color: ${lightGrey};
	}

	& > h5 {
		position: relative;
		font-weight: 500;
		opacity: .4;
		margin: 8px 0 16px;

		&::before {
			content: '';
			position: absolute;
			width: 150px;
			height: 1px;
			background: #fff;
			opacity: .5;
			top: -2px;
			left: 130px;
		}
	}

	& > h1 {
		font-size: 3rem;
		font-weight: 500;
		color: var(--gold);
		margin: 50px auto;
	}
`

export const PictureFrame = styled.div`
	position: relative;
  width: 300px;
  height: 350px;
	margin-top: 70px;
	margin-right: -90px;
	border: 4px solid transparent;
	border-radius: 13px;
  box-shadow: 5px 5px 20px black, 
		-5px -5px 10px dimgray, 
		inset 5px 5px 20px black, 
		inset -5px -5px 10px dimgray;
`

export const Portrait = styled.img`
	position: absolute;
	width: 18rem;
  top: -8%;
  left: 20px;
  border-radius: 190px;
`