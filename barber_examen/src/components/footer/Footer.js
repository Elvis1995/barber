import React, { Component } from 'react'
import '../../css/Master.css';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
	  <div>
		<section id="footer">
			<div className="wrapper">
				<div className="links">
					<a href="{}"><i className="material-icons">mail</i>Alis@frisor.com</a>
					<a href="{}"><i className="material-icons">phone</i>08-531 801 07</a>
					<a href="{}"><i className="material-icons">place</i>Forvägen 13, 145 51 Norsborg</a>
				</div>
			</div>
		</section>
      </div>
    )
  }
}
