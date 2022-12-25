import React from 'react'
import './Update.css'
import { UpdatesData } from '../../data/data' 
const Update = () => {
  return (
	<div className="updates">
		{UpdatesData.map((update) => {
			return (
				<div className="update">
					<img src={update.img} alt="" />
					<div className="notif">
						<div style={{marginBottom: '0.5rem'}}>
							<span>
								{update.name}
							</span>
							<span>
								 {update.noti}
							</span>
						</div>
						<span>{update.time}</span>

					</div>
				</div>
			)
		})}
	</div>
  )
}

export default Update