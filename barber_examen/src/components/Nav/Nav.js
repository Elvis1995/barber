import React, { Component } from 'react'
import '../../css/Master.css';
import './Nav.css';
import { Link } from 'react-router-dom';
// import Route from 'react-router-dom/Route';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			scrolled: false,
			open: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 10;
			if(isTop !== true) {
				this.setState({ scrolled: true });
			} else {
				this.setState({ scrolled: false });
			}
		});

			let openHamburger = document.querySelector('.hamburger');
			let menuContainer = document.querySelector('.links');
			openHamburger.addEventListener('click', () => {
				if(this.state.open === false) {	
					menuContainer.style.display = 'block';
					this.setState({open : true});
				}
				else if(this.state.open === true) {
					menuContainer.style.display = 'none';
					this.setState({open : false});
				}
			});
		}


	// componentWillUnmount () {
	// 	window.removeEventListener('scroll')
	// }

render() {
	return (
		<div>
			<div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
				<div className="wrapper">
					<Link to={"/"}>
						<img className="logo" src="/img/logo/logo.png" alt="Logo" />
					</Link>
					<div className="links">
						<ul>
							<Link to={"/"} className="button">Startsida</Link>
							<Link to={"/Boka"} className="button">Boka nu</Link>
							<Link to={"/Kontakt"} className="button">Kontakt</Link>
						</ul>
					</div>
					<div className="hamburger">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="menu_container">
						<Link to={"/"} className="button">Startsida</Link>
						<Link to={"/Boka"} className="button">Boka nu</Link>
						<Link to={"/Kontakt"} className="button">Kontakt</Link>
					</div>
				</div>
			</div>
		</div>
		)
  }
}
