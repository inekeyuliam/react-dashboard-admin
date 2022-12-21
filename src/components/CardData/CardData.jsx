import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts'
import './CardData.css'
const CardData = (props) => {
	const [expanded, setExpanded] = useState(false)
	return (
	<div className="card-data">
		<AnimateSharedLayout>
			{
				expanded ? 
					<ExpandedCard param={props} setExpanded={() => setExpanded(false)}/>:
					<CompactCard param={props} setExpanded={() => setExpanded(true)}/>
				
			}
		</AnimateSharedLayout>
	</div>
  )
}
function CompactCard({param, setExpanded}){
	const Png = param.png
	const percentage = param.barValue
	return (
		<motion.div className="compact-card" style={{
			background: param.color.backGround,
			boxShadow: param.color.boxShadow
		}}
		layoutId='expandableCard'
		onClick={setExpanded}
		>
			<div className="radial-bar">
				<CircularProgressbar 
				value={percentage} 
				text={`${percentage}%`} 
				/>
				<span>{param.title}</span>
			</div>
			<div className="detail">
				<Png/>
				<span>${param.value}</span>
				<span>Last 24 hours</span>
			</div>
		</motion.div>
	)
}
export default CardData

function ExpandedCard({param, setExpanded}){
	const data = {
		options: {
			chart:{
				type: "area",
				height: "auto",
			},
			dropShadow:{
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur:3,
				color: '#000',
				opacity: 0.35
			},
			fill:{
				colors: ['#fff'],
				type: 'gradient'
			},
			dataLabels:{
				enabled: false
			},
			stroke:{
				curve: 'smooth',
				colors: ['white']
			},
			tooltip:{
				x:{
					format: 'dd/MM/yy HH:mm'
				}
			},
			grid:{
				show:true,
			},
			xaxis:{
				type: "datetime",
				categories: [
				  "2018-09-19T00:00:00.000Z",
				  "2018-09-19T01:30:00.000Z",
				  "2018-09-19T02:30:00.000Z",
				  "2018-09-19T03:30:00.000Z",
				  "2018-09-19T04:30:00.000Z",
				  "2018-09-19T05:30:00.000Z",
				  "2018-09-19T06:30:00.000Z",
				]
			}
		}
	}
	return (
		<motion.div className="expanded-card" style={{
			background: param.color.backGround,
			boxShadow: param.color.boxShadow
		}}
		layoutId='expandableCard'
		>
		<div style={{
				alignSelf:'flex-end',
				cursor: 'pointer',
				color: 'white'
			}}>
			<UilTimes onClick={setExpanded}  />
		</div>
		<span>{param.title}</span>
		<div className="chart-container">
			<Chart series={param.series} type='area' options={data.options}/>
		</div>
		<span>Last 24 hours</span>
	</motion.div>
	)
}