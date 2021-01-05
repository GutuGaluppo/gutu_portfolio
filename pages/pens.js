import Layout from '../components/layout'
import Navbar from '../components/Navbar'

const Pens = () => {
	return (
		<Layout>
			<Navbar/>
			<div class="cp_embed_wrapper iframe">
				<iframe
					height="400px"
					style={{ width: '100%' }}
					scrolling="no"
					title="CSS Particle Effects"
					src="https://codepen.io/gutugaluppo/embed/rNMBQdZ?height=265&theme-id=dark&default-tab=css,result"
					frameborder="no"
					loading="lazy"
					allowtransparency="true"
					allowfullscreen="true">
					See the Pen
				<a href='https://codepen.io/gutugaluppo/pen/rNMBQdZ'>
						CSS Particle Effects
					</a>
					by Gutu Galuppo
  			(<a href='https://codepen.io/gutugaluppo'>@gutugaluppo</a>)
				on <a href='https://codepen.io'>CodePen</a>.
			</iframe>
			</div>
			<script jsx>
				{`
					.cp_embed_wrapper {
						overflow: hidden;										
						resize: both;
						background: white;
						padding-bottom: 10px;
						height: 400px;
						width: 600px;
					}
					.cp_embed_wrapper iframe {
						height: 100% !important;
					}
				`}
			</script>
		</Layout >
	)
}

export default Pens