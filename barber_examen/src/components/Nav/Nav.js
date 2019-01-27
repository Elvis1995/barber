import React, { Component } from 'react'
import '../../../src/Master.css';
import '../../components/Nav/Nav.css';

export default class Header extends Component {
  render() {
    return (
	  <div>
		<nav>
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
		</nav>
      </div>
    )
  }
}
