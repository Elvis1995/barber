import React, { Component } from 'react'
import '../../css/Master.css';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import Route from 'react-router-dom/Route';

export default class Nav extends Component {
	constructor() {
		super();
		this.addActiveClass= this.addActiveClass.bind(this);
		this.state = {
			scrolled: false,
			open: false,
			active: false
		};
	}

	addActiveClass() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
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
					this.setState({ open : true });
				}
				else if(this.state.open === true) {
					menuContainer.style.display = 'none';
					this.setState({ open : false });
				}
			});
			
		}

render() {
	return (
		<div>
			<div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
				<div className="wrapper">
					<NavLink activeClassName='active_link' to={"/"}>
						<img className="logo" src="/img/logo/logo.png" alt="Logo" />
					</NavLink>
					<div className="links">
						<ul>
							<NavLink exact={true} activeClassName='active_link' to={"/"} className="button">Startsida</NavLink>
							<NavLink activeClassName='active_link' to={"/Boka"} className="button">Boka nu</NavLink>
							<NavLink activeClassName='active_link' to={"/Kontakt"} className="button">Kontakt</NavLink>
						</ul>
					</div>
					<div className="hamburger">
						<div id="nav-icon2" className={this.state.active ? 'open': null} onClick={this.addActiveClass}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="menu_container">
						<NavLink exact={true} activeClassName='active_link' to={"/"} className="button">Startsida</NavLink>
						<NavLink activeClassName='active_link' to={"/Boka"} className="button">Boka nu</NavLink>
						<NavLink activeClassName='active_link' to={"/Kontakt"} className="button">Kontakt</NavLink>
					</div>
				</div>
			</div>
		</div>
		)
  }
}
