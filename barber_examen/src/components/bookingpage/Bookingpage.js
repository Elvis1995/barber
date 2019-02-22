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
  new Date(2019, 1, 7),
];

export default class Bookingpage extends Component {
	componentDidMount = () => {
		let testen = document.querySelectorAll(".day");
		let boxtest = document.querySelector(".boxtest");

		for(let i = 0; i < testen.length; i++) {
			testen[i].addEventListener("click", () => {
				boxtest.style.display = "block";
			})
		}
	}

  render() {
    return (
      <div className="bookingtest">
        <Nav />
        <div className="wrapper">
        <BookingCalendar 
        bookings={bookings}
		clickable={true} />
		<div className="boxtest">
			<h1>test box</h1>
		</div>
        </div>
        <Footer />
      </div>
    );
  }
}
