import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from './Hamza_WebDev.pdf'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

const Services=()=>{
	return(
		<div className='services'>
			<div className='awesome'>
				<span>My </span>
				<span>Services</span>
				<span>Full Stack Web GIS developer 
					<br/>
					with GIS engineering degree
				</span>
				<a href={Resume} download>
				<button className='button s-button'>Download CV</button>
				</a>
			</div>
			<div className='cards'>
			<div style={{left:'14rem'}}>
				<Card emoji={HeartEmoji} heading='Frontend' detail="React, Angular, Bootstrap, Styled Components"/>
			</div>
			<div style={{top:'12rem', left:'-4rem'}}>
				<Card emoji={Glasses} heading='Backend' detail="Node, Django, Nest js"/>
			</div>
			<div style={{top:'19rem', left:'12rem'}}>
				<Card emoji={Humble} heading='GIS' detail="Leaflet , Mapbox, ArcGIS, Spatial Data, Maps"/>
			</div>
			</div>
		</div>
	)
}

export default Services;