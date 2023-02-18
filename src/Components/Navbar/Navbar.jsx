import React from 'react'
import './Navbar.css'


const Navbar =()=>{
	return (
		<div className='n-wrapper'>
			<div className='n-left'>
				<div className='n-name'>Hamza</div>
				<span>Toggle</span>

			</div>
			<div className='n-right'>
				<div className='n-list'>
					<ul style={{listStyleType:'none'}}>
						<li>Home</li>
						<li>Experience</li>
						<li>Portfolio</li>
						<li>Testimonials</li>
					</ul>
				</div>

			</div>
			<button className='button n-button'>Contact Me!</button>

		</div>
	)
}

export default Navbar;