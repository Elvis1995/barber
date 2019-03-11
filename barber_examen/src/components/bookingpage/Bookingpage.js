import React, { Component } from 'react';
import BookingCalendar from 'react-booking-calendar';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './Bookingpage.css';

const bookings = [
  new Date(2019, 2, 16),
  new Date(2019, 3, 21),
  new Date(2019, 4, 14),
  new Date(2019, 5, 17),
  new Date(2019, 4, 11),
  new Date(2019, 3, 27),
  new Date(2019, 3, 29)
];

export default class Bookingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
			name: ''
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	bookingSystem() {
		let testare = document.querySelector('.booking-calendar');
		let dayBox = document.querySelectorAll('.day-box');
		let calenderList = document.querySelector('.list');
		let formList = document.querySelector('.confirm_booking');
		let bookingButton = document.querySelectorAll('.booking');
		let closeButton = document.querySelectorAll('.close_list');
		let confirmButton = document.querySelector('.confirm_booking_button');
		let confirmOrder = document.querySelector('.confirm_order');

		for(let i = 0; i < dayBox.length; i++) {
			dayBox[i].addEventListener('click', () => {
			calenderList.style.display = 'block';
			console.log('testaren');
			});
		}

		for(let i = 0; i < bookingButton.length; i++) {
			bookingButton[i].addEventListener('click', () => {
			formList.style.display = 'block';
			});
		}

		for(let i = 0; i < closeButton.length; i++){
			closeButton[0].addEventListener('click', () => {
				formList.style.display = 'none';
			});
			closeButton[1].addEventListener('click', () => {
				calenderList.style.display = 'none';
			});
		}

		confirmButton.addEventListener('click', () => {
			confirmOrder.style.display = 'block';
			testare.style.display = 'none';
			calenderList.style.display = 'none';
			formList.style.display = 'none';
			setTimeout(function() {
				window.location.reload();
			}, 3150);
		});
	} 
		
	componentDidMount = () => {
		this.bookingSystem();
	}

	handleChange(event) {
    this.setState({
			name: event.target.value
		});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
		<div>
			<div className="bookingtest">
				<Nav />
				<div className="wrapper">
				<BookingCalendar bookings={bookings}clickable={true} />
					<div className="confirm_booking">
						<img className="icons_new close_list" src="https://img.icons8.com/ios-glyphs/50/000000/delete-sign.png" alt="X" />
						<h3>Fyll i formuläret</h3>
						<form className="confirm_form" action="">
							<label>Namn</label>
							<input type="text" name="name" placeholder="Namn" value={this.state.name} onChange={this.handleChange}></input>
							<label>Telefonnummer</label>
							<input type="text" name="phone" placeholder="Ex. 0762251663"></input>
							<label>Email</label>
							<input type="text" name="mail" placeholder="Alfred@hotmail.com"></input>
							<button className="button rounded green confirm_booking_button" type="button" name="submit">Boka nu</button>
						</form>
					</div>
					<div className="list">
						<img className="icons_new close_list" src="https://img.icons8.com/ios-glyphs/50/000000/delete-sign.png" alt="X" />
							<div className="row">
								<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />8:00 am – 8:45 am</h5>
								<p className="small">1 plats tillgänglig</p>
								<button className="button booking" data-booking-button>Boka nu</button>
							</div>
							<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />8:50 am – 9:35 am</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />9:40 am – 10:25 am</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />10:30 am – 11:15 am</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />11:20 am – 12:05 pm</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />12:10 pm – 12:55 pm</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />1:00 pm – 1:45 pm</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />1:50 pm – 2:35 pm</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
						<hr></hr>
						<div className="row">
							<h5><img className="icons_new" src="https://img.icons8.com/small/24/000000/clock.png" alt="styling" />2:40 pm – 3:25 pm</h5>
							<p className="small">1 plats tillgänglig</p>
							<button className="button booking" data-booking-button>Boka nu</button>
						</div>
					</div>
					<div className="confirm_order">
						<h1>Tack <span className="confirm_name">{this.state.name}</span> för bookningen, Du har nu fått ett mail!</h1>
					</div>
				</div>
			</div>
      <Footer />
		</div>
    );
  }
}
