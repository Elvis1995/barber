import React, { Component } from 'react'
import '../../css/Master.css'
import './Contact.css';
import Maps from '../maps/maps'

export default class Contacts extends Component {
  render() {
    return (
    <div>
      <section id="contact">
        <div className="wrapper">
          <div className="contact">
            <div className="contact_person">
              <div className="contact_person_img">
                <img src="img/contact/contact_1.jpg" alt=""/>
              </div>
              <div className="contact_person_info">
                <h4 className="contact_person_name">Emma lindh</h4>
                <h5 className="contact_person_title">Chef / Ansvarig</h5>
                <p className="contact_person_story">Hej! Mig kan du kontakta om du är intresserad av vårt produktbud och vill veta mer</p>
                <div className="contact_person_touch">
                  <p>Emma.lindh@alisfrisor.se</p>
                  <p>073 942 42 50</p>
                </div>
              </div>
            </div>      
            <div className="contact_person">
              <div className="contact_person_img">
                <img src="img/contact/contact_2.jpg" alt=""/>
              </div>
              <div className="contact_person_info">
                <h4 className="contact_person_name">Conny Larsson</h4>
                <h5 className="contact_person_title">Anställd</h5>
                <p className="contact_person_story">Hej! Mig kan du kontakta om du är intresserad av vårt produktbud och vill veta mer</p>
                <div className="contact_person_touch">
                  <p>Conny.Larsson@alisfrisor.se</p>
                  <p>073 942 42 51</p>
                </div>
              </div>
            </div>      
            <div className="contact_person">
              <div className="contact_person_img">
              <img src="img/contact/contact_3.jpg" alt=""/>
              </div>
              <div className="contact_person_info">
                <h4 className="contact_person_name">Sara kärnström</h4>
                <h5 className="contact_person_title">Anställd</h5>
                <p className="contact_person_story">Hej! Mig kan du kontakta om du är intresserad av vårt produktbud och vill veta mer</p>
                <div className="contact_person_touch">
                  <p>Sara.karnstrom@alisfrisor.se</p>
                  <p>073 942 42 52</p>
                </div>
              </div>
            </div>
            </div>
            <div className="contact_company">
              <div className="contact_company_questions">
                <h4>Har du övriga frågor</h4>
                <p>Om du har tankar eller funderingar kring vår process eller hur vi generellt jobbar så ska du inte tveka att kontakta
                oss antingen genom våra medarbetare eller om du vill gå prata om lite djupare saker
                så kan du vända dig till <strong>info@alifrisör.se</strong> eller ringa oss på <strong>08-531139343.</strong><br/><br/>
                Vi är alltid öppen för frågor och feedback så det tveka inte att kontakta oss, vi svarar alltid inom 24h</p>
              </div>
              <div id="contact_google_maps">
                <Maps />
              </div>
            </div>
          </div>
      </section>
    </div>
    )
  }
}
