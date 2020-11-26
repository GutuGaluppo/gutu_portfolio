import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function About() {
	return (
		<Layout>
			<div className={styles.main}>
				<Navbar />
				<section className={styles.home}>
					<aside className={styles.aside__r}>
						<p className={styles.instagram}>Instagram</p>
						<div className={styles.goldSphere}></div>
						<p className={styles.twitter}>Twitter</p>
					</aside>

					<div className={styles.centerDiv}>

						<div className={styles.info}>
							<p>Gutu galuppo</p>
							<h5>
								Frontend web developer
							<span></span>
							</h5>
							<h1>Design is thinking made visual.</h1>
							<div className={styles.view__profile}>
								<h6>View Profile</h6>
								<button>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>

						<div className={styles.pic}>
							<img src="/images/gutu_portrait.png" alt="Gutu profile picture" className={styles.portrait} />
						</div>
					</div>

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
				</section>
			</div>
		</Layout>
	)
}