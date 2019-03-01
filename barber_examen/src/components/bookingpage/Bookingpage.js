import React, { Component } from 'react';
import BookingCalendar from 'react-booking-calendar';
import './Bookingpage.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const bookings = [
  new Date(2019, 1, 1),
  new Date(2019, 1, 2),
  new Date(2019, 1, 3),
  new Date(2019, 1, 4),
  new Date(2019, 1, 5),
  new Date(2019, 1, 6),
  new Date(2019, 1, 7)
];

export default class Bookingpage extends Component {
	componentDidMount = () => {
	let testen = document.querySelectorAll(".day");
    let boxtest = document.querySelector(".list");
    let closeButton = document.querySelector(".close_list");

	for(let i = 0; i < testen.length; i++) {
		testen[i].addEventListener("click", () => {
		boxtest.style.display = "block";
		})
	}

    closeButton.addEventListener("click", () => {
      boxtest.style.display = "none";
    })
	}

  render() {
    return (
    <div className="bookingtest">
    <Nav />
    	<div className="wrapper">
		<BookingCalendar bookings={bookings}clickable={true} />
			<div className="confirm_booking">
				<img className="icons_new close_list" src="https://img.icons8.com/ios-glyphs/50/000000/delete-sign.png" alt="X" />
				<h3>Fyll i formuläret</h3>
				<div className="confirm_form">
					<label>Namn</label>
					<input type="text" placeholder="Namn"></input>
					<label>Telefonnummer</label>
					<input type="text" placeholder="Ex. 0762251663"></input>
					<label>Email</label>
					<input type="text" placeholder="Alfred@hotmail.com"></input>
					<a href="{{ url('intro') }}" className="button rounded green" data-booking-button>Boka nu</a>
				</div>
			</div>
			<div className="list">
      		<img className="icons_new close_list" src="https://img.icons8.com/ios-glyphs/50/000000/delete-sign.png" alt="X" />
        		<div className="row">
          			<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />8:00 am – 8:45 am</h5>
          			<p className="small">1 plats tillgänglig</p>
          			<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
        		</div>
       			<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />8:50 am – 9:35 am</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />9:40 am – 10:25 am</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />10:30 am – 11:15 am</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />11:20 am – 12:05 pm</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />12:10 pm – 12:55 pm</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />1:00 pm – 1:45 pm</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />1:50 pm – 2:35 pm</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
				<hr></hr>
				<div className="row">
					<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />2:40 pm – 3:25 pm</h5>
					<p className="small">1 plats tillgänglig</p>
					<a href="{{ url('intro') }}" className="button booking" data-booking-button>Boka nu</a>
				</div>
			</div>
		</div>
        <Footer />
      </div>
    );
  }
}
