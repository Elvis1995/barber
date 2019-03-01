import React, { Component } from 'react'
import '../../css/Master.css';
import './offers.css';

export default class Offers extends Component {
  render() {
    return (
		<div>
		<section id="offers">
			<div className="wrapper">
				<div className="cols cols_three">
					<div className="col col_a">
						<div className="skew">
							<h2>Herr</h2>
						</div>
						<div className="price">
							<h2>199kr</h2>
						</div>
						<div className="text">
							<h5><img className="icons_new" src="https://img.icons8.com/windows/32/000000/barber-scissors.png" alt="cut" />Klippning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/windows/32/000000/short-beard.png" alt="beard" />Rakning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/ios-glyphs/30/000000/human-head.png" alt="styling" />Styling</h5>
							<a href="{{ }}" className="button rounded green" data-booking-button>Boka nu</a>
						</div>
					</div>
					<div className="col col_b">
						<div className="skew">
							<h2>Dam</h2>
						</div>
						<div className="price">
							<h2>299kr</h2>
						</div>
						<div className="text">
							<h5><img className="icons_new" src="https://img.icons8.com/material/24/000000/womans-hair.png" alt="cut" />Hårförlägning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/material/24/000000/deodorant-spray.png" alt="cut" />Hårfärgning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/windows/32/000000/barber-scissors.png" alt="cut" />Klippning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/metro/26/000000/womans-hair.png" alt="hair" />Styling</h5>
							<a href="{{ }}" className="button rounded green" data-booking-button>Boka nu</a>
						</div>
					</div>
					<div className="col col_c">
						<div className="skew">
							<h2>Barn</h2>
						</div>
						<div className="price">
							<h2>99kr</h2>
						</div>
						<div className="text">
							<h5><img className="icons_new" src="https://img.icons8.com/windows/32/000000/barber-scissors.png" alt="cut" />Klippning</h5>
							<h5><img className="icons_new" src="https://img.icons8.com/ios-glyphs/30/000000/human-head.png" alt="styling" />Styling</h5>
							<a href="{{ }}" className="button rounded green" data-booking-button>Boka nu</a>
						</div>
					</div>
				</div>
			</div>
		</section>
      </div>
    )
  }
}
