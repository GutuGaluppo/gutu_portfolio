import Layout from '../components/layout'
import Navbar from '../components/navbar/Navbar'

const Gallery = () => {
	return (
		<Layout>
			<Navbar />
			<h1>GALLERY</h1>
			<script jsx>{`
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
			`}</script>
		</Layout >
	)
}

export default Gallery