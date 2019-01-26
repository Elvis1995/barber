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
					<img className="logo" src="img/logos/logo_gold.png" alt="Logo" border="0" />
				</a>
				<div className="menu_container">
					<a href="{{ url('stories') }}" className="button">Sida 1</a>
					<a href="{{ url('concepts') }}" className="button">Sida 2</a>
					<a href="{{ url('stores') }}" className="button">Sida 3</a>
					<a href="{{ url('contact') }}" className="button">Sida 4</a>
				</div>
			</div>
		</nav>
      </div>
    )
  }
}
