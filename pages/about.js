import Layout from '../components/layout'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { AboutContainer, SectionContainer, AsideRightContainer, GoldSphere, CenterDiv, InfoDiv, PictureFrame, Portrait, Linkedin } from '../components/about.page.styles'

const skills = ["React", "JavaScript", "HTML", "CSS", "SCSS", "Git/ Github"]

export default function About() {
	return (
		<Layout>
			<AboutContainer>
				<Navbar />
				<SectionContainer>
					<AsideRightContainer>
						<p>Github</p>
						<GoldSphere />
						<p>Linkedin</p>
						<GoldSphere />
						<p>Codepen</p>
					</AsideRightContainer>

					<CenterDiv>
						<InfoDiv>
							<h1>"It's not about ideas, it's about making ideas happen"</h1>

							<h3>Gutu galuppo</h3>
							<h5>
								Frontend web developer
							<span></span>
							</h5>
							<p>
								Former Sound Designer I ended up discovering a huge pleasure in programming.
								Nowadays I work as a Frontend Software Developer – turning UI mock-ups into elegant products.
								I care about code quality as well a User Experience and I am always looking for new opportunities to share and improve my programming skills.
							</p>

							{/* <div className={styles.view__profile}>
								<h6>View Profile</h6>
								<button>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div> */}


							<div>
								{
									skills.map((tec, index) => {
										return (
											<p key={index}>
												{tec}
											</p>
										)
									})
								}
							</div>


						</InfoDiv>


						<PictureFrame>
							<Portrait src="/images/gutu_portrait.png" alt="Gutu profile picture" />
						</PictureFrame>
					</CenterDiv>

					<aside className={styles.asside__l}>
						<FontAwesomeIcon icon={faChevronLeft} />
						<p>01</p>
						<hr />
						<p>50</p>
						<FontAwesomeIcon icon={faChevronRight} />
					</aside>
					<div className={styles.footer}>
						<h1>Software Developer</h1>
					</div>
				</SectionContainer>
			</AboutContainer>
		</Layout>
	)
}