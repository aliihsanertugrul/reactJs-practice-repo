import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Paragraphs = ({ rowCount = 10 }) => {
	return (
		<>
			{[...new Array(rowCount)].map((_, index) => (
				<p key={index}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
					perferendis neque sapiente iusto reiciendis praesentium sit
					est atque sequi consequuntur laudantium nihil quo accusamus
					voluptatibus in! Tenetur earum dicta nostrum. Repellat,
					itaque expedita? Aspernatur quisquam deserunt sed pariatur
					corrupti? Deleniti, at? Natus necessitatibus animi dolorum
					laudantium, adipisci ipsa placeat quo impedit voluptatem
					rerum vel libero dolore doloremque qui veritatis
					voluptatibus! Recusandae incidunt fuga dolorum reprehenderit
					dolor asperiores modi sed soluta libero iure accusamus
					repellendus veritatis cumque sit labore cum impedit placeat
					vero temporibus qui, totam numquam quam. Maiores, deleniti
					explicabo! Obcaecati id, animi, praesentium deserunt cum
					cupiditate vitae corporis nesciunt laborum porro quod
					officia tempore. Dolor praesentium beatae, voluptates rem
					voluptatibus error minus delectus deserunt qui veritatis a,
					sed iure? Quaerat distinctio facilis consequatur nobis
					similique aut commodi, delectus, illo amet asperiores
					exercitationem? Quas distinctio esse amet in, incidunt vitae
					sequi ducimus, maiores voluptas ea ad, nam corrupti
					doloremque architecto.
				</p>
			))}
		</>
	);
};

const Scroll = () => {
	const refAboutUs = useRef(null);

	const handleScroll = () => {
		const aboutUs = refAboutUs.current;
		const currentScrollPosition = window.scrollY; // sayfanın scroll posizyonu
		const aboutUsScrollPosition = aboutUs.offsetTop; // aboutUs elementinin scroll pozisyonu
		const aboutUsHeight = aboutUs.offsetHeight; // aboutUs elementinin yüksekliği

		if (currentScrollPosition >= aboutUsScrollPosition - aboutUsHeight) {
			aboutUs.classList.add("active");
		}

		console.log(currentScrollPosition, aboutUsScrollPosition);
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Container className="mt-4">
			<Paragraphs />
			<section className="about-us" ref={refAboutUs}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Consequatur quisquam minus quibusdam culpa. Voluptatum soluta
				asperiores perspiciatis sint itaque provident quaerat
				consequuntur iure illum ea. Qui porro sint aut omnis! Totam
				beatae molestiae nesciunt dolores eum facilis nulla alias
				perspiciatis nostrum deleniti minus harum quisquam, fuga
				temporibus. Architecto repellat deleniti in velit consequuntur,
				modi deserunt quos officia cupiditate ut quaerat! Laboriosam,
				minus voluptatum dolorem voluptate ducimus, quod commodi est
				doloremque doloribus aut magni officiis unde voluptates? Eius,
				quod laudantium? Ipsa voluptatum expedita dolorum tempora? Iste
				pariatur maxime dicta rem est?
			</section>
			<Paragraphs />
		</Container>
	);
};

export default Scroll;
