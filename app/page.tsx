import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
   <main>
    <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Networks"
          subject = "science"
          duration={45}
          color = "#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Linguo the Language Lover"
          topic="Natural Language Processing"
          subject = "language"
          duration={30}
          color = "#6ee7b7"/>
          <CompanionCard 
          id="789"
          name="Data the Data Detective"
          topic="Data Analysis"
          subject = "data"
          duration={60}
          color = "#f87171"/>
  
      </section>

      <section className='home-section'>
        <CompanionsList
        title = "Recently Completed Sessions"
        companions={recentSessions}
        className="w-2/3 max-lg:w-full"
        />
        <CTA/>

      </section>
   </main>
  )
}

export default Page