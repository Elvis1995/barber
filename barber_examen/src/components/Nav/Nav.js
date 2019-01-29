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
	}

	// componentWillUnmount () {
	// 	window.removeEventListener('scroll')
	// }

  render() {
    return (
	  <div>
		<div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
			<div className="wrapper">
				<a href="{{ url('intro') }}">
					<img className="logo" src="/img/logo/logo.png" alt="Logo" />
				</a>
					<div className="menu_container">
						<Link exact to={"/"} className="button">Startsida</Link>
						<Link to={"/Boka"} className="button">Boka nu</Link>
						<Link to={"/Kontakt"} className="button">Kontakt</Link>
					</div>
			</div>
		</div>
      </div>
    )
  }
}
