import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'
import CaseStudy from './CaseStudy'
import Branding from './Branding'
import Clients from './Clients'
import NumberedBox from './NumberedBox'
import Articles from './Articles'
import Card from './Card'

export default function Home() {
  return (
    <>
        <NavBar />
        <Hero />
        <CaseStudy />
        <Branding />
        <Clients />
        <NumberedBox />
        <Articles />
        <Card />
    </>
  )
}
