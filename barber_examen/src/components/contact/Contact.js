import React, { Component } from 'react'
import '../../css/Master.css'
import './Contact.css';
import Nav from '../nav/Nav';
import Header from '../header/Header';

export default class Contacts extends Component {
  render() {
    return (
	  <div>
        <Nav />
        <Header />
        <h1>Välkommen till kontaktsidan</h1>
    </div>
    )
  }
}
