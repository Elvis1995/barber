import React, { Component } from 'react';
import BookingCalendar from 'react-booking-calendar';
import './Bookingpage.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const bookings = [
  new Date(2016, 7, 1),
  new Date(2016, 7, 2),
  new Date(2016, 7, 3),
  new Date(2016, 7, 9),
  new Date(2016, 7, 10),
  new Date(2016, 7, 11),
  new Date(2016, 7, 12),
];

export default class Bookingpage extends Component {
  render() {
    return (
      <div className="bookingtest">
        <Nav />
        <div className="wrapper">
        <BookingCalendar 
        bookings={bookings}
        clickable={true} />
        </div>
        <Footer />
      </div>
    );
  }
}
