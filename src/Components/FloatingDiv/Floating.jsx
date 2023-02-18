import React from 'react'
import './Floating.css'
import Github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


const FloatingDiv =({image,txt1,txt2})=>{
	return (
		<div className='floatingdiv'>
			<img src={image} alt=""/>
			<span>
				{txt1}
				<br/>
				{txt2}
			</span>
		</div>
	)
}

export default FloatingDiv;