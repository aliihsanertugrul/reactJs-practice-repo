import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "../components/01-hello-world";
import HelloReact from "../components/02-hello-react";
import { Jsx1, Jsx2, Jsx3, Jsx4, Jsx5, Jsx6, Jsx7 } from "../components/03-jsx";
import Style1 from "../components/04-styles/style1";
import Style2 from "../components/04-styles/style2";
import Style3 from "../components/04-styles/style3";
import Style4 from "../components/04-styles/style4";
import Clock1 from "../components/05-clock/clock1";
import Greetings from "../components/06-props/greetings";
import ProductCard from "../components/08-props/product-card";
import Products from "../components/08-props/products";
import Clock2 from "../components/09-clock/clock2";
import Base64 from "../components/10-image/base64";
import Image from "../components/10-image/image";
import Gallery from "../components/11-image-gallery/gallery";
import ProfileCard from "../components/12-profile-card/card";
import BootstrapDynamic from "../components/13-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "../components/13-bootstrap/bootstrap-static";
import Icons from "../components/14-icons/icons";
import Events from "../components/15-events/events";
import Shop from "../components/16-shop/shop";
import State from "../components/17-useState/state";
import Stateless from "../components/17-useState/stateless";
import Counter from "../components/18-counter/counter";
import Birthday from "../components/19-birthday/birthday";
import UseEffect3 from "../components/20-useeffect/useEffect3";
import UseEffect1 from "../components/20-useeffect/useeffect1";
import UseEffect2 from "../components/20-useeffect/useeffect2";
import Clock3 from "../components/21-clock/clock3";
import CountryFilter from "../components/22-country-filter/country-filter";
import Useref from "../components/23-useref/useref";
import Scroll from "../components/24-useref/scroll";
import ClassComp from "../components/25-class-comp/class-comp";
import UserList from "../components/26-user-cards/user-list";
import Countries from "../components/27-countries/countries";
import ParentComp from "../components/28-child-to-parent/parent";
import Form1 from "../components/29-forms/form1";
import Form2 from "../components/29-forms/form2";
import Form3 from "../components/29-forms/form3";
import Form4 from "../components/29-forms/form4";
import Form5 from "../components/29-forms/form5";
import Form6 from "../components/29-forms/form6";
import Form7 from "../components/29-forms/form7";
import Header from "../components/00-home/header";
import Footer from "../components/00-home/footer";
import { Container } from "react-bootstrap";
import Home from "../components/00-home/home";
import Useparams from "../components/30-routing/useparams";
import Usenavigate from "../components/30-routing/usenavigate";
import Exchange from "../components/31-exchange";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="d-flex flex-column h-100">
				<Header />
				<Container className="py-3 flex-grow-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/hello-react" element={<HelloReact />} />
						<Route path="/hello-world" element={<HelloWorld />} />
						<Route path="/jsx1" element={<Jsx1 />} />
						<Route path="/jsx2" element={<Jsx2 />} />
						<Route path="/jsx3" element={<Jsx3 />} />
						<Route path="/jsx4" element={<Jsx4 />} />
						<Route path="/useparams/:id" element={<Useparams />} />
						<Route path="/usenavigate" element={<Usenavigate />} />
						<Route path="/exchange" element={<Exchange />} />
					</Routes>
				</Container>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
