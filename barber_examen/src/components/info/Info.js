import React, { Component } from 'react'
import '../../css/Master.css';
import './info.css';

export default class Info extends Component {
  render() {
    return (
	  <div>
		<section id="info">
			<div className="wrapper">
				<div className="cols cols_two">
					<div className="col">
						<div className="img">
							<img className="cover" src="img/background/info_bg.jpg" alt="info" border="0" />
						</div>
					</div> 
					<div className="col">
						<div className="text">
							<h2>Titel</h2>
							<p>Hos oss hittar du ett gäng kreativa och nyskapande frisörer som hjälper dig med allt från produktråd och välbehövliga frisyrtips till att fixa en vacker håruppsättning inför festen. Vi erbjuder allt från klippning, färg till tvätt och föning men även komplett styling, bröllop och festupsättning inför fest och bröllop.</p>
							<p>Hos oss hittar du ett gäng kreativa och nyskapande frisörer som hjälper dig med allt från produktråd och välbehövliga frisyrtips till att fixa en vacker håruppsättning inför festen. Vi erbjuder allt från klippning, färg till tvätt och föning men även komplett styling, bröllop och festupsättning inför fest och bröllop.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
      </div>
    )
  }
}
