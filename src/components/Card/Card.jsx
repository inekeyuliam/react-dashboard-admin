import React from 'react'
import { cardsData  } from '../../data/data'
import CardData from '../CardData/CardData'
import './Card.css'
const Card = () => {
  return (
	
	<div className="Cards">
		{cardsData.map((card,id) => {
			return (
				<div className="parentContainer">
					<CardData title={card.title}
					color={card.color}
					barValue={card.barValue}
					value={card.value}
					png={card.png}
					series={card.series}
					 />
				</div>
			)
		})}
	</div>
  )
}

export default Card