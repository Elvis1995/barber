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
								<h2>DIN PERSONLIGA FRISÖR & BARBERARE I NORSBORG</h2>
								<p>Alis Klipp & Barbershop är en traditionell barberare och frisörsalong i Norsborg. Vill du unna dig själv eller någon annan en trevlig stund?</p>
								<p>Våra barberare ser till att helheten blir perfekt, och att din personliga styling är rätt just för dig. Vi har 21 års erfarenhet i branschen och har varit verksamma på Norsborg i 10 år.</p>
								<p>En barberare har som huvudmål att klippa, sköta om, styla och raka mäns hår. Och det utrymme som en barberare arbetar på kallas barbershop. Det är dock inte bara en plats att vårda om sitt skägg och hår, utan har även blivit en social samlingsplats genom åren. Här träffas folk också för att prata och ha trevligt.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    )
  }
}
