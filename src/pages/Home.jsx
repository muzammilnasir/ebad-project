import React from 'react'
import Banner from '../components/home/Banner'
import Bestsellers from '../components/home/Bestsellers'
import CardSlider from '../components/home/CardSlider'

function Home() {
  return (
    <div className='dark:bg-gray-900'>
      <Banner />
      <CardSlider />
      <Bestsellers />
    </div>
  )
}

export default Home
