import React from 'react'
import { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import './CardData.css'
const CardData = (props) => {
	const [expanded, setExpanded] = useState(false )
	return (
	<div className="card-data">
		<AnimateSharedLayout>
			{
				expanded ? (
					// <ExpandedCard/>

					'Expanded'
				):
				<CompactCard param={props}/>
				
			}
		</AnimateSharedLayout>
	</div>
  )
}
function CompactCard({param}){
	const Png = param.png
	const percentage = param.barValue
	return (
		<div className="compact-card">
			<div className="radial-bar">
				<CircularProgressbar 
				value={percentage} 
				text={`${percentage}%`} 
				/>
			</div>
			<div className="detail">
				<Png/>
				<span>${param.value}</span>
				<span>Last 24 hours</span>
			</div>
		</div>
	)
}
export default CardData