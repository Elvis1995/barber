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
							<h5>Klippning</h5>
							<h5>Rakning</h5>
							<h5>Styling</h5>
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
							<h5>Klippning</h5>
							<h5>Hårfärgning</h5>
							<h5>Styling</h5>
							<h5>hårförlängning</h5>
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
							<h5>Klippning</h5>
							<h5>Styling</h5>
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
