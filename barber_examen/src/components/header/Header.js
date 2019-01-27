import React, { Component } from 'react'
import '../../../src/Master.css';
import '../../components/header/Header.css';

export default class Header extends Component {
  render() {
    return (
	  <div>
		<section id="header">
			<img className="pattern black_sand" src="img/pattern/black_sand.png" alt="header_bg" />
			<img className="graphic" src="img/background/header_bg.png" alt="graphic" />
			<div className="wrapper">
				<h1>
					<span>Alis Klippning som</span>
					<span>passar din livsstil</span>
				</h1>
				<p>Hos oss hittar du ett gäng kreativa och nyskapande frisörer som hjälper dig med allt från produktråd och välbehövliga frisyrtips till att fixa en vacker håruppsättning inför festen. Vi erbjuder allt från klippning, färg till tvätt och föning men även komplett styling, bröllop och festupsättning  inför fest och bröllop.</p>
				<a href="{{ url('intro') }}" className="button rounded green" data-booking-button>Boka nu</a>
			</div>
		</section>
      </div>
    )
  }
}
