import React from 'react'
import Card from '../Card/Card'
import Table from '../Table/Table'
import './Content.css'
const Content = () => {
  return (
    <div className="main-dashboard">
        <h1>Dashboard</h1>
        <Card/>
        <Table/>
    </div>
  )
}

export default Content