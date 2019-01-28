import React, { Component } from 'react'
import '../../../src/Master.css';
import '../../components/Nav/Nav.css';

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

	componentWillUnmount () {
		window.removeEventListener('scroll')
	}

  render() {
    return (
	  <div>
		<div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
			<div className="wrapper">
				<a href="{{ url('intro') }}">
					<img className="logo" src="/img/logo/logo.png" alt="Logo" />
				</a>
				<div className="menu_container">
					<a href="{{ url('stories') }}" className="button">Startsida</a>
					<a href="{{ url('concepts') }}" className="button">Boka nu</a>
					<a href="{{ url('stores') }}" className="button">Kontakt</a>
				</div>
			</div>
		</div>
      </div>
    )
  }
}
