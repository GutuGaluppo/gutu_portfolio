import React, { useEffect } from 'react';
import './jumpLetterStyles.scss';

export default function JumpingLettersFunc() {
	useEffect(() => {
		fillLists();
	});

	function fillLists() {
		var letters = document.querySelectorAll('.letter');
		const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

		// console.log(letters)

		let scl = [];
		let avoColorList = [];

		letters.forEach(() => {
			scl.push(random(10, 20));
			avoColorList.push([random(30, 60), random(0, 10), random(200, 30)]);
		});

		const setColor = (el, r, g, b) => {
			el.style.color = `rgb(${r},${g},${b})`
		}

		letters.forEach((letter, index) => {
			letter.addEventListener('mouseenter', () => {
				letter.classList.add('isJumping');

				// const newColorValueR = (avoColorList[index][0]);
				// const newColorValueG = (avoColorList[index][1]);
				// const newColorValueB = (avoColorList[index][2]);

				setColor(letter, 159, 145, 91);

				setTimeout(() => {
					letter.classList.remove('isJumping')

					setColor(letter, 255, 255, 255)
				}, 2000)

				setTimeout(() => {
					setColor(letter, 74, 74, 75)
				}, 4000)
			})
		});
	}

	return (
		<div>
			<div className="box">
				<div className="inner">
					<div className="letter" data-title="&ldquo;">&ldquo;</div>
					<div className="letter" data-title="B">B</div>
					<div className="letter" data-title="e">e</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="w">w</div>
					<div className="letter" data-title="a">a</div>
					<div className="letter" data-title="t">t</div>
					<div className="letter" data-title="e">e</div>
					<div className="letter" data-title="r">r</div>
					<div className="letter" >,</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<br />
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="m">m</div>
					<div className="letter" data-title="y">y</div>
					<div className="letter" data-title="&nbsp;">&nbsp;</div>
					<div className="letter" data-title="f">f</div>
					<div className="letter" data-title="r">r</div>
					<div className="letter" data-title="i">i</div>
					<div className="letter" data-title="e">e</div>
					<div className="letter" data-title="n">n</div>
					<div className="letter" data-title="d">d</div>
					<div className="letter" data-title="&rdquo;">&rdquo;</div>
					<br />
				</div>
			</div>
			<style jsx>
				{`
				 .box {
					
					display: flex;
					justify-content: center;
					align-items: center;
					position: fixed;
					top: 50%;
					left: 50%;
					
					transform: translate(-50%, -50%);
				}
				
				.inner {
					display: table;
				}
				
				.letter {
					font-size: 8vw;
					font-family: "Georgia";
					font-style: italic;
					font-weight: 700;
					display: inline-block;
					line-height: 10vw;
					letter-spacing: -0.5vw;
					text-shadow: -20px 10px 10px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.3);
					transform-origin: 50% 100%;
					will-change: text-shadow, transform, color, opacity;
					-webkit-font-smoothing: antialised;
					backface-visibility: hidden;
				}
				.isJumping {
					animation: jumpingLetter 1.5s 1 alternate forwards cubic-bezier(0.175, 0.885, 0.32, 1.275);
				}
			
				.letter::after {
					content: attr(data-title);
					transform: scaleY(-1);
					width: inherit;
					height: -40%;
					position: absolute;
					bottom: -63%;
					left: 1px;
					opacity: 0.08;
					background: linear-gradient(to bottom, transparent,  rgba(255, 255, 255, 0.5));
			
					background-clip: text;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				
				@keyframes jumpingLetter {
					0%,
					to {
						transform: matrix(1, 0, 0, 1, 0, 0);
					}
					25%,
					75% {
						text-shadow: -5px 2px 2px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.3);
						transform: matrix(1.1, 0, 0, 0.8, 0, 0);
					}
					50% {
						text-shadow: -40px 20px 20px rgba(0, 0, 0, 0.3), 0 40px 100px rgba(0, 0, 0, 0.3);
						transform: matrix(0.8, 0, 0, 1.2, 0, 0) translateY(-10px);
					}
				}
				`}
			</style>
		</div>
	);
}