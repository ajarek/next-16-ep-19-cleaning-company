import AboutHero from '@/components/AboutHero'
import AboutTeam from '@/components/AboutTeam'
import React from 'react'

const AboutPage = () => {
  return (
    <main className='relative flex flex-col items-center justify-center gap-4'>
      <AboutHero />
      <AboutTeam />
      {/* <AboutInfo1 />
      <AboutInfo2 />
      <AboutInfo3 /> */}
    </main>
  )
}

export default AboutPage